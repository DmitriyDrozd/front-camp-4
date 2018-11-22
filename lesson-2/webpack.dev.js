const fs = require('fs');
const merge = require('webpack-merge');
const webpack = require('webpack');

const { COMMON_CONFIG, PATHS } = require('./webpack.common.js');

const CONFIG = {
    devServer: {
        contentBase: PATHS.dist,
        host: '0.0.0.0',
        hot: true,
        publicPath: '',
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    mode: 'development',
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
                test: /\.css?$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                include: [PATHS.src],
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
};

module.exports = merge(COMMON_CONFIG, CONFIG);
