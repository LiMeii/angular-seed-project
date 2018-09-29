
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/main.ts',
    'polyfills': './src/polyfills.ts'
  },
  devtool: 'cheap-module-eval-source-map',
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css']
  },
  output: {
    path: path.join(__dirname, './build-prod'),
    filename: 'js/[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader',
          'angular-router-loader',
          'angular2-template-loader',
          'source-map-loader'
          //'tslint-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpg|gif|ico|woff|woff2|ttf|eot)$/,
        include: path.resolve(__dirname, "src/assets"),
        use: 'file-loader?name=assets/images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build-prod']),
    new webpack.NormalModuleReplacementPlugin(/\.\/environment\.dev/, './environment.prod'),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common', 'app', 'polyfills'],
      minChunks: 2
    }),
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/,
      path.resolve(__dirname, '../src')
    ),
    // inject in index.html
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin(
      [{ from: './src/assets', to: path.join(process.cwd(), 'build-prod/assets')}],
      { copyUnmodified: true }
    ),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};