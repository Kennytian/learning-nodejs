var path = require('path');

const cfg = {
  entry: './webpack/lesson1/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = cfg;