
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: {
        main: './src/test.ts'
    },
    output: {
        path: path.join(__dirname, "../out-test/"),
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: ['.js', '.ts', '.html', '.css']
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            { test: /.ts$/, use: ['awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /.html$/, use: 'raw-loader' },
            { test: /\.css$/, use: ['to-string-loader', 'style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main']
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../src')
        ),
        // inject in index.html
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            filename: 'index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }

}
