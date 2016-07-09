//webpack.base config
var webpack = require('webpack');
var path = require("path");
//配置开始
module.exports = {
    entry: {
        build:'./src/main.js',
    },
    output: {
        path: './dist',
        publicPath: 'dist/', 
        filename: '[name].js'
    },
    module: {
        loaders: [
            {   
                //vue-loader
                test: /\.vue$/,
                loader: 'vue',
                exclude:"/node_modules/"
            },
            {
                // 文件hash
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=[name].[ext]?[hash]',
                exclude:"/node_modules/"
            },
            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            // { 
            //     test: /\.(png|jpg)$/, 
            //     loader: 'url-loader?limit=8192'
            // }
        ]
    },
    //babel 转译  可以使用es5，也可以使用es6 写代码
    babel: {
        presets: ['es2015','stage-0'],
        plugins: ['transform-runtime']
    },
    //自动补全识别后缀
    resolve:{
        extensions:['','.js',".css",'vue']  
    },
    //热加载
    devServer: {
        hot: true
    },
    plugins: [
        //热加载 (可不添加)
        new webpack.HotModuleReplacementPlugin(),
        //提公用js到common.js文件中
        new webpack.optimize.CommonsChunkPlugin('common.js'),
    ],

}
