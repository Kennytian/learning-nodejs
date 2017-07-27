let path = require('path');

const cfg = {
  entry: {
    app: './webpack/lesson4/src/index.js',
    print: './webpack/lesson4/src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = cfg;