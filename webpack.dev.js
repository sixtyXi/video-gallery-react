const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge.smartStrategy({
  'module.rules': 'prepend'
})(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    })
  ]
});
