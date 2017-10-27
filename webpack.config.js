'use strict';

const path = require('path');

module.exports = {
    entry: ['./src/js/app.js'],
    output: {
        path: path.join(__dirname, '/dist/js'),
        publicPath: 'js',
        filename: 'app.bundle.js',
    },
    devServer: {
        contentBase: 'src',
        host: 'localhost'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            }
        ]
    },
};

