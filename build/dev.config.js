const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: '../dist',
    port: 4000,
    // 是否实时刷新
    inline: true
  }
})