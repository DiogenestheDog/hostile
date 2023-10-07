//const path = require('path');
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
