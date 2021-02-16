const config = require('../package');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  devServer: {
    contentBase: './public',
    historyApiFallback: {
      index: 'index.html'
    }
  }
});
