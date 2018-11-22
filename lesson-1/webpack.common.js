const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const PACKAGE_JSON = require('./package.json');
const APP_VERSION = PACKAGE_JSON.version;

const PATHS = {
    dist: path.join(__dirname, 'dist'),
    src: path.join(__dirname, 'src'),
};
PATHS.js = path.join(PATHS.dist, 'js');

const VENDOR_DEPS = PACKAGE_JSON.dependencies;

const CSS_REGEX = /\.css$/;
const VENDOR_REGEX = new RegExp(`${Object.keys(VENDOR_DEPS).join('|')}`);

const COMMON_CONFIG = {
    entry: {
        'main.bundle': path.join(PATHS.src, 'index.js'),
    },
    output: {
        filename: '[name].js',
        globalObject: 'this',
        path: PATHS.js,
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
            }
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: m => {
                        const name = m.nameForCondition && m.nameForCondition();

                        return name && name.match(VENDOR_REGEX) && !name.match(CSS_REGEX);
                    },
                    name: 'vendor.bundle',
                    chunks: 'all',
                    enforce: true,
                },
            },
            minSize: 0,
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.bundle.css',
        }),
        new webpack.DefinePlugin({
            $APP_VERSION: JSON.stringify(APP_VERSION),
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
};

module.exports = {
    COMMON_CONFIG,
    PATHS,
};
