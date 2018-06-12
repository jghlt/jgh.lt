const path = require('path');
const config = require('../package');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const { isDevelopment } = require('webpack-mode');

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    publicPath: `${config.project.paths.public}`,
    path: path.resolve(__dirname, `..${config.project.paths.system}`),
    filename: (isDevelopment) ? '[name].js' : '[name].[chunkhash:8].js',
  },
  plugins: [
    new CleanWebpackPlugin(
      ['./public'],
      {
        root: path.resolve(__dirname, '..'),
        verbose: true,
        exclude: [
          '.htaccess'
        ]
      }
    ),
    new HtmlWebpackPlugin({
      cache: true,
      filename: '../index.html',
      template: './src/templates/index.html',
      inject: (isDevelopment),
      project: config.project,
      alwaysWriteToDisk: (isDevelopment),
      minify: (isDevelopment) || {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: false,
        minifyJS: true,
        processScripts: ['application/ld+json']
      }
    }),
    new HtmlWebpackHarddiskPlugin(),
    new MiniCssExtractPlugin({
      filename: (isDevelopment) ? '[name].css' : '[name].[chunkhash:8].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: [
                    'last 2 versions'
                  ]
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.(jpg)$/i,
        use: [
          {
            loader: 'advanced-image-loader',
            options: {
              width: 1280,
              quality: 85,
              srcset: [480, 768, 1024, 1280],
              publicPath: '/dist',
              name: '[name]-[width]-[quality]-[hash]'
            }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/dist'
            }
          }
        ]
      },
      {
        test: /\.(png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/dist'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/dist'
            }
          }
        ]
      }
    ]
  }
};
