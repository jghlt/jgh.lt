const path = require('path');
const glob = require('glob');
const config = require('./config');
const package = require('../package');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = merge(common, {
  plugins: [
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, `..${config.paths.src}**/*.js`)),
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        }
      }),
      new WebappWebpackPlugin({
        logo: path.resolve('src/icons/icon.png'),
        prefix: '[hash]',
        favicons: {
          start_url: '/',
          appName: package.project.name,
          background: package.project.colors.background,
          theme_color: package.project.colors.theme,
          icons: {
            coast: false,
            yandex: false,
            android: {
              background: true
            }
          }
        }
      })
    ]
  }
});
