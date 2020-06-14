'use strict';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    cache: true,
    entry: {
        index: `./src/index.ts`
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: ['./node_modules', './src'],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'ts-loader'
                },
            ],
            exclude: /node_modules/,
        }],
    },
    mode: 'development',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: '../common/build/bin/wasm/debugExecutable/**/*',
                to: './',
                flatten: true
            }]
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
};
