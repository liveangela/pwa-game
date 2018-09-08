const {path, rules} = require('./config')

module.exports = {
  mode: 'development',
  entry: path.entry,
  output: {
    path: path.output,
    filename: 'server.js'
  },
  module: {
    rules
  },
  target: 'node'
}
