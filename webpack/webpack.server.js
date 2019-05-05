const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common');

module.exports = merge.smart(common, {
  name: 'server',
  target: 'node',
  mode: 'none',
  entry: './serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    filename: 'serverRenderer.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              exportOnlyLocals: true
            }
          }
        ]
      }
    ]
  }
});
