const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpack = require('webpack')
const { isEnvDev, appSrc, appBuild, webpackPublicPath, appHtml, appTsConfig } = require('./constants')

module.exports = {
  stats: 'errors-warnings',
  output: {
    clean: true,
    path: appBuild,
    pathinfo: isEnvDev,
    publicPath: webpackPublicPath,
    filename: `[name].js`,
    crossOriginLoading: 'anonymous',
    libraryTarget: 'umd',
    library: undefined
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      '@': appSrc
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[contenthash:8][ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[contenthash:8][ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[contenthash:8][ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      templateParameters: {
        PUBLIC_PATH: webpackPublicPath,
        isEnvDev
      },
      template: appHtml
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: appTsConfig
      }
    })
  ]
}
