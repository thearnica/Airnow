require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const processHTMLPages = require('./processHTMLHelper.js');

const OUTPUT = path.resolve(__dirname, 'build');

const extractCSS = new ExtractTextPlugin('css/style.css');
const plugins = [
  extractCSS,
  ...processHTMLPages(),
  // new HtmlWebpackInlineSVGPlugin({ path: OUTPUT})
];

module.exports = {
  entry: {
    index: process.env.NODE_ENV === "development"
      ? ['webpack-dev-server/client?http://localhost:3000', './source/js/index.js']
      : ['./source/js/index.js'],
    slick: ['./source/js/slick.js'],
    slider: ['./source/js/slider.js'],
  },
  module: {
    rules: [
      {
        test: [/\.scss$/i, /\.sass$/i, /\.css$/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?url=false', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(svg|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        query: {
          name: '[path][name].[ext]',
          context: './source'
        }
      },
      {
        test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        query: {
          name: '[path][name].[ext]',
          context: './source'
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.es6'],
    alias: {
      'fonts': path.resolve(__dirname, 'source/css/fonts')
    }
  },
  output: {
    path: OUTPUT,
    filename: 'js/[name].js',
  },
  devServer: {
    contentBase: './source'
  },
  plugins,
};

// console.log(module.exports.output);
