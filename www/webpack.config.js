const path = require('path'); 

const HTMLWebpackPlugin = require('html-webpack-plugin');


const WORK_DIR = path.resolve(process.cwd(), '.');
const DIST_DIR = path.resolve(process.cwd(), 'dist');

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',

  entry: {
    app: './bootstrap.js',
  },

  output: {
    path: DIST_DIR,
    filename: '[name].bundle.js',
  },

  resolve: {
    extensions: ['.js', '.ts', '.html'],
  },

  plugins: [
    new HTMLWebpackPlugin({
      path: path.join(WORK_DIR, 'index.html'),
    })
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
      }
    ]
  },

  devServer: {
    contentBase: DIST_DIR,
    compress: true,

    host: '0.0.0.0',
    port: 8080,

    inline: true,

    watchContentBase: true,
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
    },
  }
};


module.exports = devConfig;
