const webpack = require('webpack')
const config = require('./webpack.prod.conf')
const {webpackAPIcallback} = require('./config')

webpack(config, webpackAPIcallback)
