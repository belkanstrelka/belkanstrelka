const express = require('express');
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

// const getRoutes = require('./routes');
// const routes = getRoutes();

function redirect(req, res, next) {
  if (req.hostname !== 'bebelka.com' && !dev) {
    return res.redirect(`https://bebelka.com${req.originalUrl}`);
  }
  return next();
}

app.prepare().then(() => {
  const server = express();

  server.use(redirect);
  server.get('*', (req, res) => {
    // const parsedUrl = parse(req.url, true);
    // const { pathname, query = {} } = parsedUrl;
    // const route = routes[pathname];

    // if (route) {
    //   return app.render(req, res, route.page, query);
    // }
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;

    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
