const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: './js/main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/main.[contenthash].css"
    }),
  ],
  
})
