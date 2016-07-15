
module.exports = function(router){
    router.map({
        '*': {
            component: function (resolve) {
                require(['./components/index.vue'],resolve)
            }
        },
        '/': {
            component: function (resolve) {
                require(['./components/index.vue'],resolve)
            }
        },
        '/user': {
            component: function (resolve) {
                require(['./components/user.vue'],resolve)
            }
        },
        '/home': {
            component: function (resolve) {
                require(['./components/home.vue'],resolve)
            }
        }
    })
    
}