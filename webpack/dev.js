const path = require('path');

// const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./common');


module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
});
