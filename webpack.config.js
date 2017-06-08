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
        host: '192.168.56.101'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
            }
        ]
    },
};

