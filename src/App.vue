<template>
  <div id="app">
    <Header class="k-header"/>
    <Content class="k-content"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
export default {
  name: 'App',
  components: { Header, Content }
}
</script>

<style>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
body {
  margin: 0px;
}
#app {
  text-align: center;
  height: 1fr;
  background-color: #eee;
}
.k-header {
  height: 80px;
  width: 100%;
}
.k-content {
  margin-top: 20px;
  height: 1fr;
  width: 100%;
  justify-items: space-between;
}
</style>
