const fs = require('fs');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
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
                        plugins: [
                            ['transform-object-rest-spread', { useBuiltIns: true }],
                        ],
                        presets: [
                            ['env', {
                                targets: {
                                    browsers: ['last 3 Chrome versions'],
                                },
                                loose: true,
                                useBuiltIns: true,
                            }],
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
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
};

const SUBFOLDERS = ['css', 'js'];

function _prepareBundlesFolder () {
    const { dist } = PATHS;

    if (!fs.existsSync(dist)) {
        fs.mkdirSync(dist);
    }

    for (const subfolder of SUBFOLDERS) {
        const folder = path.join(dist, subfolder);

        _removeOldBundles(folder);
    }
}

function _removeOldBundles (folder) {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    } else {
        fs.readdirSync(folder).forEach(file => {
            const fullPath = path.join(folder, file);

            _deleteFileSync(fullPath);
        });
    }
}

function _deleteFileSync (path) {
    if (fs.existsSync(path)) {
        fs.unlinkSync(path);
    }
}


_prepareBundlesFolder();

module.exports = merge(COMMON_CONFIG, PROD_CONFIG);
