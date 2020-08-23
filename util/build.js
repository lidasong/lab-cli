const webpack = require('webpack')
const { base } = require('./get-base-config')
const { merge } = require('./util')
const rimraf = require('rimraf')
const TerserPlugin = require('terser-webpack-plugin')
const os = require('os')
const logger = require('./logger')

const build = {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js$/,
        parallel: os.cpus().length - 1
      })
    ]
  }
}

const doBuild = async () => {
  rimraf.sync('build', ['rmdir'])
  webpack(merge(build, base), (err, stats) => {
    if (err) {
      logger.fatal(err)
      process.exit()
    }

    const config = {
      colors: true,
      chunks: false,
      hash: false,
      version: false
    }

    if (stats.hasErrors()) {
      logger.fatal(stats.toString(config))
    }

    logger.success('info\n' + stats.toString(config))
  })
}

module.exports = () => doBuild()
