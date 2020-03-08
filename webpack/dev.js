// const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { globalSettings } = require('./settings');
const commonConfig = require('./common');


module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',

  output: {
    path: globalSettings.DEV_BUILD_FOLDER,
    filename: 'bundle.js',
  },

  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin(),
  ],

  devServer: {
    contentBase: globalSettings.DEV_BUILD_FOLDER,
  },
});
