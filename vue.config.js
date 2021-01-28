const WorkerPlugin = require('worker-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/md2txt/'
    : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.worker\.js$/,
          use: { loader: "worker-loader" },
        },
      ],
    },
    plugins: [
      new WorkerPlugin()
    ]
  }
}
