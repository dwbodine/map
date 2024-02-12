const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanDirWebpackPlugin = require("cleandir-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]-bundle-[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./public/index.html')
        }),
        new AssetsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanDirWebpackPlugin(
            ["dist/*"],
            {
                stage: "before"
            }
        )
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        open: true,
        hot: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            { test: /\.jpg$/, use: 'raw-loader' }
        ]
    }
};
