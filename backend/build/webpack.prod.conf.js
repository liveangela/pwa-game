const {path, rules} = require('./config')

module.exports = [
  {
    mode: 'production',
    entry: path.entry,
    output: {
      path: path.output,
      filename: 'server.js'
    },
    module: {
      rules
    },
    target: 'node'
  },
  {
    mode: 'production',
    entry: path.sw,
    output: {
      path: path.output,
      filename: 'sw.js'
    },
    module: {
      rules
    },
    target: 'webworker'
  }
]
