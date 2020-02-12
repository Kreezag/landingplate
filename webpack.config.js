const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');
const isDev = process.env.NODE_ENV !== 'production';

// let envPlugins = [];
// if (isDev) {
//   envPlugins = [
//     new webpack.HotModuleReplacementPlugin(),
//   ];
// } else {
//   envPlugins = [
//     new MiniCssExtractPlugin({
//       filename: isDev ? '[name].css' : '[name].[hash].css',
//       chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
//     }),
//     new CleanWebpackPlugin({
//       cleanAfterEveryBuildPatterns: ['dist']
//     }),
//     new webpack.HashedModuleIdsPlugin(),
//   ];
// }

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: {index: '/'},
    // contentBase: './dist',
    hot: true,
  },
  devtool: 'source-map',
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [{
      test: /\.less$/,
      exclude: /(node_modules)/,
      use: ['style-loader', 'css-loader?-url&sourceMap', 'less-loader?sourceMap'],
    },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],

      },
    ]
  },
}
