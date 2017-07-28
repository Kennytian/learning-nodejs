const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const cfg = {
  entry: {
    app: './webpack/lesson7/src/index.js',
    print: './webpack/lesson7/src/print.js'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase:'./dist/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      exclude: ['*.html']
    }),
    new HtmlWebpackPlugin({
      title: 'Development'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash].js',
      minChunks (module) {
        return module.context && module.context.indexOf('node_modules') >= 0;
      }
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/'
  }
};

module.exports = cfg;