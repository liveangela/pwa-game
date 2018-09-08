const path = require('path')

module.exports = {
  path: {
    src: path.resolve(__dirname, '../src'),
    entry: path.resolve(__dirname, '../src/index.js'),
    sw: path.resolve(__dirname, '../src/sw.js'),
    output: path.resolve(__dirname, '../../dist'),
    static: path.resolve(__dirname, '../../dist/static'),
    js: path.resolve(__dirname, '../../dist/static/js'),
    fe: path.resolve(__dirname, '../../frontend')
  },
  rules: [
    {
      test: /\.js$/,
      include: [path.resolve(__dirname, '../src')],
      // exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        {
          loader: 'eslint-loader',
          options: {
            failOnError: true
          }
        }
      ]
    }
  ],
  webpackAPIcallback: (err, stats) => {
    if (err) {
      console.error(err.stack || err)
      console.error(err.details || '')
      return
    }
    console.log(
      stats.toString({
        chunks: true,
        colors: true
      })
    )
  }
}
