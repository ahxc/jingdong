const path = require('path')
const webpack = require('webpack')
const htmlWbepackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(path.dirname(__dirname), 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,//i忽略大小写
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: './img/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './font/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }]
      }
    ]
  },
  plugins:[
    new htmlWbepackPlugin({
      template: './index.html',
    }),
  ]
}
