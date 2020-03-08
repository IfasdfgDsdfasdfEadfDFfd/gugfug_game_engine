const path = require('path');
// const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const { globalSettings } = require('./settings');
const commonConfig = require('./common');


module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',

  entry: path.join(globalSettings.SOURCE_FOLDER, 'bootstrap.js'),

  output: {
    path: globalSettings.DEV_BUILD_FOLDER,
    filename: 'bundle.js',
  },

  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(globalSettings.SOURCE_FOLDER, 'index.html'),
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
  ],

  devServer: {
    contentBase: globalSettings.DEV_BUILD_FOLDER,
  },
});
