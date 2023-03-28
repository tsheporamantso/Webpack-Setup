const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Development',
        }),
    ],
    module: {
        rules: [
            {
               test: /\.css$/i,
               use: ['style-loader', 'css-loader'],
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
      },
};