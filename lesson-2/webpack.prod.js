const fs = require('fs');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const { COMMON_CONFIG, PATHS } = require('./webpack.common.js');

const PROD_CONFIG = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js)?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "useBuiltIns": "entry",
                                    "targets": {
                                        "chrome": "58",
                                        "ie": "11"
                                    }
                                }
                            ]
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-transform-async-to-generator'
                        ],
                    },
                }],
            },
            {
                test: /\.scss$/,
                include: [PATHS.src],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css?$/,
                include: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
    ]
};

module.exports = merge(COMMON_CONFIG, PROD_CONFIG);
