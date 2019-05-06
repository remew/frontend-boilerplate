'use strict';
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const isFileLoaderRegExp = /\.(png|jpg|svg|ttf)$/;

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/typescript',
                '@babel/react',
                [
                  '@babel/env',
                  {
                    modules: false,
                  },
                ],
              ],
              plugins: [
                'styled-jsx/babel',
              ],
            },
          },
          'ts-loader',
        ],
      },
      {
        test: isFileLoaderRegExp,
        use: [
          {
            loader: 'file-loader',
            options: {
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, 'template/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    host: '0.0.0.0',
  },
};
