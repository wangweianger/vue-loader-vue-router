//app.js
var Vue = require('vue')
var App = require('./app.vue')
var routerMap = require('./router')
var VueRouter = require('vue-router')
var filter = require('./filter');

//使用插件
Vue.use(VueRouter);

// 使用filter
for(var k in filter){
	Vue.filter(k, filter[k]);
};

//使用路由 并启动web应用程序
var router = new VueRouter()
routerMap(router)
router.start(App, 'app')

router.afterEach(function (transition) {
  console.log('成功浏览到: ' + transition.to.path)
})

