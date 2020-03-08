const path = require('path');

// const webpack = require('webpack');

const { globalSettings } = require('./settings');


module.exports = {
  resolve: {
    extensions: ['.ts', '.js' ],
    modules: [ globalSettings.SOURCE_FOLDER, 'node_modules' ],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader',
      },
    ],
  },
};
