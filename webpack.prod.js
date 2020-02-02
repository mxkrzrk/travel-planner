const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', './src/client/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/client/views/index.html'
    }),
    new MiniCssExtractPlugin(),
    new WorkboxPlugin.GenerateSW()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
}
