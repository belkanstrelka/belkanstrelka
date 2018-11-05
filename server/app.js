const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')
const compression = require('compression')

const multer  = require('multer')
const ipapi = require('ipapi.co');

const next = require('next');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

const upload = multer({ storage: storage })
const mailer = require('./mailer')

const briefRouter = express.Router();

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

// const getRoutes = require('./routes');
// const routes = getRoutes();
function redirectMiddleware(req, res, next) {
  if (req.hostname !== 'bebelka.com' && !dev) {
    return res.redirect(`https://bebelka.com${req.originalUrl}`);
  }
  return next();
}

briefRouter.post('', upload.array('files'),  function(req, res, next) {
  var briefData = req.body

  mailer({
    email: briefData.contactEmail,
    name: briefData.contactName,
    text: JSON.stringify(briefData, null, "\t"),
    attachments: req.files.map(f => ({
      filename: f.originalname,
      contentType: f.mimetype,
      path: path.join('./uploads/', f.filename)
    }))
  }).then(() => {
    req.files.map(f => {
      fs.unlink(path.join('./uploads/', f.filename), () => {});
    })

    res.json({ result: 'success' })
  }).catch((error) => {
    req.files.map(f => {
      fs.unlink(path.join('./uploads/', f.filename), () => {});
    })

    res.json({ result: 'failed' })
  })
});

app.prepare().then(() => {
  const server = express();

  server.use(compression())
  server.use(bodyParser.json())
  server.use(express.static(__dirname + '/static'));
  server.use(redirectMiddleware);
  server.use('/api/brief', briefRouter);

  server.get('/country', (req, res) => {
    const userIp = req.header('x-forwarded-for') || req.connection.remoteAddress

    ipapi.location((c) => {
      res.send(c);
    }, userIp, '', '')
  })

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
