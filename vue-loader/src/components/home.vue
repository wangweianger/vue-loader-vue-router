<style scoped>
.container {
  border: 1px solid red;
}
.red {
  color: #f00;
}
</style>

<template>
  <div class="container">
    <h2 class="red">{{msg}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我这里面是home的路由!'
    }
  }
}
</script>