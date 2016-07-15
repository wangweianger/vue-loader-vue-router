//webpack.base config
var webpack = require('webpack');
var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');

//配置开始
var config = {
    entry: {
        build:'./src/main.js',
    },
    output: {
        path: './dist',
        publicPath: '/', 
        filename: '[name].js',
        chunkFilename: "[name].js"
    },
    module: {
        loaders: [
            {   
                test: /\.vue$/,
                loader: 'vue',
                exclude:"/node_modules/"
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|vue\/dist/
            },
            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {
                test: /\.(png|jpg|gif)$/, 
                loader: 'url-loader?limit=8192&name=img/[name].[ext]?[hash]'
            }
        ]
    },
    //babel 转译  可以使用es5，也可以使用es6 写代码
    babel: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-runtime']
    },
    //自动补全识别后缀
    resolve:{
        extensions: ['', '.js', '.vue'], 
    },
    //插件
    plugins: [
        //全局注入变量
        new webpack.ProvidePlugin({
          $:"jquery",
          jQuery:"jquery",
          "window.jQuery":"jquery"
        }),
        // new webpack.optimize.CommonsChunkPlugin('common.js'),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:['jquery'],
        // }),
        //自动生成html文件
        new htmlWebpackPlugin({
            title:"欢迎",
            template: 'index.html',
            inject: true,
            hash: true,
            cache: true,
        }),
    ],

}

module.exports = config;