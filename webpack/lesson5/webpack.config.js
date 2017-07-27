const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cfg = {
  entry: {
    app: './webpack/lesson5/src/index.js',
    print: './webpack/lesson5/src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      exclude: ['*.html']
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management v2'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = cfg;