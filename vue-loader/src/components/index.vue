<style scoped>
.container {
  border: 1px solid red;
}
.red {
  color: #f00;
}
.logo{
  width:200px;
  height:200px;
}
</style>

<template>
  <div class="container">
    <img class="logo" src="../assets/img/logo.png">
    <h2 class="red">{{msg | limitTo 5}}</h2>
    <h2 class="red">{{loadingStatusFilter | loadingStatusFilter}}</h2>
    <h3 v-link="{ path: '/user' }">user</h3>
    <h3 v-link="{ path: '/home' }">home</h3>
  </div>
  <div>
    <p>当前路径: {{$route.path}}</p>
    <p>当前路由参数: {{$route.params | json}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'welcomt to vue-loader,我这里面是index的 路由',
      loadingStatusFilter:1,
    }
  }
}
</script>
