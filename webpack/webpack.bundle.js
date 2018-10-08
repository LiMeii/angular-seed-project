// this webpack config file is used to analyse what's in bundle file.
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'a': './src/app/bundle/a.js',
    },
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: path.join(__dirname, '../build-bundle'),
        filename: 'js/[name].bundle.js'
    },

    plugins: [
        new CleanWebpackPlugin(['./build-bundle'], { root: path.join(process.cwd(), '') }),
        new webpack.ContextReplacementPlugin(
            /\@angular(\\|\/)core(\\|\/)esm5/,
            path.resolve(__dirname, '../src')
        )
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
};