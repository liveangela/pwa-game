const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../dist/static'),
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: path.resolve(__dirname, '../dist/sw.js'),
      swDest: 'service-worker.js',
      importWorkboxFrom: 'local',
      importsDirectory: 'js'
    }
  },
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
