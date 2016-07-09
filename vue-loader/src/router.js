module.exports = function(router){
	router.map({
		'*': {
            component: require('./components/index.vue')
        },
        '/': {
            component: require('./components/index.vue')
        },
        '/user': {
            component: require('./components/user.vue'),
        },
        '/user/:userId': {
            name: 'user', // 给这条路径加上一个名字
            component: {
              template: `<p>路径是{{$route.path}}</p>
                        <p>用户名是{{$route.params.userId}}</p>
                        <p>当前路由参数: {{$route.params | json}}</p>
                      `
            }
        },
        '/user/a/:details':{
            name:'details',
            //只有当 /async 需要被渲染时，MyComponent.vue组件，会自动加载它的依赖组件，并且异步的加载进来。
            component: function (resolve) {
              require(['./components/userDetails.vue'], resolve)
            }
        },
        '/home': {
            component: require('./components/home.vue')
        }
    })
	
}