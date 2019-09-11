const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge.strategy({ 'module.rules': 'prepend' })(common, {
  entry: {
    main: ['webpack-hot-middleware/client']
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
