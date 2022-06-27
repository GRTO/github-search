const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv').config({ path: `${__dirname}/.env` });
const isDevelopment = process.env.NODE_ENV !== 'production';

const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = function build(env, arg) {
  const config = {
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, 'dist'),
      chunkFilename: 'chunks/[id].js',
      publicPath: '',
    },
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000,
      historyApiFallback: true,
      open: true,
    },
    mode: arg.mode,
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['ts-loader'],
        },
        {
          test: /\.html$/,
          use: { loader: 'html-loader' },
        },
        {
          test: /\.(s*)css$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          type: 'asset',
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/[name].bundle.css',
        chunkFilename: '[id].css',
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
      }),
      new DefinePlugin({
        'process.env': JSON.stringify({ ...dotenv.parsed, ...process.env }),
        'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
      }),
    ],
    resolve: {
      modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/')],
      extensions: ['.ts', '.tsx', '.jsx', '.js', '.css'],
    },
  };

  return config;
};
