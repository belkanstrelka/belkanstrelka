const withSass = require('@zeit/next-sass')

const { resolve } = require('path');
const path = require('path');

const rootDir = path.join(__dirname, './');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack(config, options) {
    return {
      ...config,
      resolve: {
        modules: [
          path.join(rootDir, 'src'),
          path.join(rootDir, 'src/js'),
          'node_modules'
        ],
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
          functions: resolve(__dirname, 'src/scss/utils/functions'),
          variables: resolve(__dirname, 'src/scss/utils/variables'),
          mixins: resolve(__dirname, 'src/scss/utils/mixins'),
          respond: resolve(__dirname, 'src/scss/utils/respond')
        }
      },
    }
  }
})
