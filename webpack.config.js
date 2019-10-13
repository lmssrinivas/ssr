const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './client.js',
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
    ],
  },
  plugins: [
    new CopyPlugin([
      { from: 'assets', to: 'assets' }
    ])
  ]
};
