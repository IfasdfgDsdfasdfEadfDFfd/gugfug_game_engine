const path = require('path');

// const webpack = require('webpack');


module.exports = {
  entry: path.resolve('src', 'index.js'),

  resolve: {
    extensions: ['.ts', 'js'],
  },
};
