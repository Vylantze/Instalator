var Webpack = require('webpack');
var path = require("path");
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

var config = {
   entry: './app/app.js',
   output: {
      path: __dirname + '/.build',
      filename: 'bundle.js'
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react', 'stage-0'],
               plugins: ["transform-decorators-legacy"]
            }
         }
      ]
   },
   plugins: [
      new WebpackCleanupPlugin(),
      new Webpack.HotModuleReplacementPlugin()
      
   ],
   watch: true
}

module.exports = config;