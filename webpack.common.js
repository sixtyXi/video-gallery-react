const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          rootMode: 'upward'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]?[hash]'
            }
          }
        ]
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|redux)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Video Gallery',
      hash: true,
      template: 'index.html'
    })
  ]
};
