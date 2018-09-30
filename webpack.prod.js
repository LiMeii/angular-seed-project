const path = require('path');
const rxPaths = require('rxjs/_esm5/path-mapping');
var helpers = require('./helpers');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  performance: {
    hints: false
  },
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: "/dist/",
    filename: 'js/[name].[chunkhash].bundle.js',
    chunkFilename: 'js/[id].[chunkhash].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.scss'],
    alias: rxPaths()
  },

  devServer: {
    historyApiFallback: true,
  },

  module: {

    rules: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular-router-loader',
          'angular2-template-loader'
        ]
      },
      {
        test: /\.(pdf|png|woff|woff2|eot|ttf|svg|jpg)$/,
        include: path.resolve(__dirname, "src/assets"),
        use: 'file-loader?name=content/Images/[name].[ext]'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
    exprContextCritical: false
  },
  plugins: [
    new CleanWebpackPlugin(['./dist'], { root: path.join(process.cwd(), '') }),
    function () {
      this.plugin('watch-run',
        function (watching, callback) {
          console.log('\x1b[33m%s\x1b[0m', `Begin compile at ${(new Date()).toTimeString()}`);
          callback();
        });
    },
    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.CommonsChunkPlugin({ name: ['vendor', 'polyfills'] }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NormalModuleReplacementPlugin(/\.\/environment\.dev/, './environment.prod', helpers.root('src', 'environment'), {}),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    }),
  ]

};

