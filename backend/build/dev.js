const webpack = require('webpack')
const config = require('./webpack.dev.conf')
const {webpackAPIcallback} = require('./config')

webpack(config).watch(
  {
    ignored: /node_modules/,
    aggregateTimeout: 500,
    poll: undefined
  },
  webpackAPIcallback
)
