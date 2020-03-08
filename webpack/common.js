const path = require('path');

// const webpack = require('webpack');


module.exports = {
  entry: path.resolve('src', 'index.ts'),

  resolve: {
    extensions: ['.ts', 'js'],
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
