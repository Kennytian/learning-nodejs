const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cfg = {
  entry: {
    app: './webpack/lesson6/src/index.js',
    print: './webpack/lesson6/src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase:'./dist/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      exclude: ['*.html']
    }),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = cfg;