var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: __dirname + '/src/js/index.js',
    output: {
        path: __dirname + '/public/static/',
        filename: 'index.js',
    },
    module: {
        loaders: [
        {
            test: /\.less$/,
            loader:  ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]

}
