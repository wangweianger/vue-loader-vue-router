# vue组件化开发体验-示例vue-loader-vue-router学习记录

>  * 使用了vuejs和webpack，以及一系列webpack加载器，如vue-loader,vue-router
>  * 根据官网的例子后再经过自己的一些思路进行了增强

## 目录结构

```
- vue-loader/
  + package.json //npm配置文件
  + index.html //入口html
  - node_modules //npm加载的模块
  - build //webpack 配置文件
    + webpack.base.config.js //基本配置
    + webpack.dev.config.js //开发环境
    + webpack.product.config.js //生产环境
  - src //开发资源目录
    - assets //一些资源
      + css  
      + js
      + img
    - components //vue组件
      + home.vue 
      + index.vue
      + user.vue
      + userDetails.vue
    + app.vue //布局文件
    + main.js  //入口文件
    + filter.js //vue的过滤器
    + router.js //vue路由插件
```

## 项目步骤

1.安装node.js

2.安装项目依赖包

```
npm install
```

3.运行开发环境

```
npm run dev 
```

```
浏览器中访问：localhost:8000
```


4.打包生产文件

```
npm run build
``` 

##大致说明

```
webpack : 前端模块化打包工具
vue.js  : vue.js  清量级的mvvm的框架
babel   : 项目使用babel编译 可用最新的es6编写我们的javascript （当然用es5写也是一样的）
vue-loader ：模块化的开发vue插件
vue-router ：vue的路由插件

```
