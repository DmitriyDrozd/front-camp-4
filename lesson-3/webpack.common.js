const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const PATHS = {
    dist: path.join(__dirname, 'dist'),
    src: path.join(__dirname, 'src'),
};

const COMMON_CONFIG = {
    entry: ['babel-polyfill', PATHS.src],
    output: {
        filename: '[name].bundle.js',
        globalObject: 'this',
        path: PATHS.dist,
        publicPath: '',
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules', PATHS.src],
    },
    node: {
        child_process: 'empty',
        fs: 'empty',
    },
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                use: ['url-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.json$/,
                use: [
                    {
                        loader: path.join(__dirname, 'src/webpack/jsonLoader.js'),
                    }
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.bundle.css',
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
};

module.exports = {
    COMMON_CONFIG,
    PATHS,
};
