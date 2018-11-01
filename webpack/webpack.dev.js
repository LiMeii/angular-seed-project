// this webpack config file is for dev environment.
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    'app': './src/main.ts',
    'vendor': './src/vendor.ts',
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
    path: path.join(__dirname, '../build-dev'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].chunk.js'
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }

    ]
  },
  plugins: [
    new CleanWebpackPlugin(['./build-dev'], { root: path.join(process.cwd(), '') }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: ['vendor', 'polyfills'] }),
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)esm5/,
      path.resolve(__dirname, '../src')
    ),
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    stats: 'minimal',
    contentBase: path.join(__dirname, './build-dev'),
    hot: true,
    port: 3200,
    open: true
  }
};