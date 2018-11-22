const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withSass = require('@zeit/next-sass')

const { resolve } = require('path');
const path = require('path');

const rootDir = path.join(__dirname, './');


const nextConfig = {
  webpack: (config, options) => {
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
  },
};

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
  [withSass, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    }
  }],
], nextConfig);
