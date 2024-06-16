const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const common = require('./webpack.common')
const { appIndex } = require('./constants')

module.exports = merge(common, {
  mode: 'production',
  entry: { stbServerUpgrade: appIndex },
  devtool: 'hidden-source-map',
  optimization: {
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
    minimizer: [new TerserPlugin()]
  }
})
