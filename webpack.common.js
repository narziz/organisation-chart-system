const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js'
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'Chart System',
      filename: 'index.html',
      template: 'src/template.html'
    }),
  ],
  module: {
    rules: [
      {
        // scss loader
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        // image loader
        test: /\.(jpg|jpeg|png|gif)$/,
        type: 'asset/resource',
        generator: {
         filename: 'icons/[name][ext][query]'
        },
      },
    ]
  }
}
