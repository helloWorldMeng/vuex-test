<template>
  <div id="app">
    <router-view/>
    <div @click="$router.push('/productList')">productList</div>
    <div @click="$router.push('/product1')">product1</div>
    <div @click="$router.push('/product2')">product2</div>

    <router-link to="/productList">productList</router-link>
    <router-link to="/product1">product1</router-link>
    <router-link to="/product2">product2</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
