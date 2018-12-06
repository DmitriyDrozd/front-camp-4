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
        chunkFilename: '[name].component.js',
        globalObject: 'this',
        path: PATHS.dist,
        publicPath: '',
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules', PATHS.src],
        alias: {
            assets: path.resolve(__dirname, 'src/assets/'),
            components: path.resolve(__dirname, 'src/components/'),
            config: path.resolve(__dirname, 'src/config/'),
            views: path.resolve(__dirname, 'src/views/'),
            entities: path.resolve(__dirname, 'src/entities/'),
            services: path.resolve(__dirname, 'src/services/'),
            styles: path.resolve(__dirname, 'src/styles/'),
            utils: path.resolve(__dirname, 'src/utils/'),
        },
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
            filename: "[name].css",
            chunkFilename: "[name].css"
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
};

module.exports = {
    COMMON_CONFIG,
    PATHS,
};
