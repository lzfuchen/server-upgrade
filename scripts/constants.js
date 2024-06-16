const path = require('node:path')
const fs = require('node:fs')
const IP = require('ip').address()

const isEnvDev = process.env.NODE_ENV === 'development'
const isEnvProd = process.env.NODE_ENV === 'production'

const webpackPublicPath = '/'

const HOST = process.env.HOST || '0.0.0.0'
const DEFAULT_PORT = process.env.PORT || 4000

const appDirectory = fs.realpathSync(process.cwd())

function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath)
}

const appIndex = resolveApp('src/index.ts')
const appBuild = resolveApp('dist')
const appSrc = resolveApp('src')
const appPublic = resolveApp('public')
const appPackageJson = resolveApp('package.json')
const appTsConfig = resolveApp('tsconfig.json')
const appHtml = resolveApp('public/index.html')
const appName = require(appPackageJson).name

module.exports = {
  isEnvDev,
  isEnvProd,
  appIndex,
  appBuild,
  appSrc,
  appPublic,
  appPackageJson,
  appTsConfig,
  webpackPublicPath,
  appHtml,
  IP,
  HOST,
  DEFAULT_PORT,
  appName
}
