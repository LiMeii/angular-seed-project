// this webpack config file is used to analyse what's in bundle file.
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    //entry: {
    //     'a': './src/app/bundle/a.js',
    //     'c': './src/app/bundle/c.js'
    // },
    entry: {
        'extract-a': './src/app/bundle/css-extract-a.js',
        'extract-b': './src/app/bundle/css-extract-b.js'
    },
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        path: path.join(__dirname, '../build-bundle'),
        filename: ' [name].[chunkhash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?minimize']
                })
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./build-bundle'], { root: path.join(process.cwd(), '') }),
        new ExtractTextPlugin('[name]-[contenthash]].css')
        //new webpack.optimize.CommonsChunkPlugin({ name: 'commons' }),
        // new webpack.optimize.CommonsChunkPlugin({ name: 'c' }),
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
};