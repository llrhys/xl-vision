const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.conf')

module.exports = webpackMerge(baseConfig, {
    mode: 'development',
    output: {
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
            }, {
                loader: 'postcss-loader'
            }]
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
            }, {
                loader: 'postcss-loader'
            }, {
                loader: 'sass-loader'
            }]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})