var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var dir_js = path.resolve(__dirname, 'js');
var dir_html = path.resolve(__dirname, 'html');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(dir_js, 'index.js'),
    output: {
        path: dir_build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader', // transpiler
            test: dir_js, //directory to transpile
        }]
    },
    plugins: [
        //Simply copies the files over
        new CopyWebpackPlugin([{
                from: dir_html // to: output.path
            } 
        ]),
    ],
    stats: {
        // Nice coloured output
        colors: true
    },
    // Create sourcemaps for the bundle
    devtool: 'source-map',
    devServer: {
        contentBase: dir_build,
    },
};