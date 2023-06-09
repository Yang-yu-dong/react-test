const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true //每次打包前清空目录
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: ["babel-loader"],
        exclude: /node_modules/ // 排除node_modules文件
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react': path.resolve(__dirname, '../react/packages/react'),
      'react-dom': path.resolve(__dirname, '../react/packages/react-dom'),
      'shared': path.resolve(__dirname, '../react/packages/shared'),
      'react-reconciler': path.resolve(__dirname, '../react/packages/react-reconciler'),
      'scheduler': path.resolve(__dirname, '../react/packages/scheduler/index')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html'
    }),

    new webpack.DefinePlugin({
      __DEV__: true,
      __EXPERIMENTAL__: true,
      __PROFILE__: true
    }),
  ],
  devServer: {
    port: 3000, // 端口
    open: true, // 自动打开
    compress: true, //启用gzip压缩
    client: {
      progress: true // 浏览器打印进度
    }
  }
}