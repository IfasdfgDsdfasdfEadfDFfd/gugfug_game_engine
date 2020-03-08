const path = require('path');

// const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { CheckerPlugin } = require('awesome-typescript-loader');

const commonConfig = require('./common');


module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new CheckerPlugin(),
  ],
});
