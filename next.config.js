const withSass = require('@zeit/next-sass')

const { resolve } = require('path');
const path = require('path');

const rootDir = path.join(__dirname, './');

const webpackConfig = withSass({
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
      module: {
        rules: [
          {
            test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  outputPath: 'static/',
                  publicPath: '/_next/',
                  limit: 1000,
                  name: 'img/[name]___[hash:base64:5].[ext]'
                }
              }
            ]
          },
          {
            test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  outputPath: 'static/fonts/',
                  publicPath: '/_next/',
                  limit: 1000,
                  name: '[name].[ext]'
                }
              }
            ]
          },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)(\?.*$|$)$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' },
          ...config.module.rules,
        ]
      },
    }
  }
})

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  },
  ...webpackConfig
}
