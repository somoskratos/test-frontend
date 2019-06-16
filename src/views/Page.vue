<template>
  <div id="app">
    <NavBar />
    <Wrapper>
      main
      <router-view />
    </Wrapper>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Wrapper from "@/components/Wrapper";
export default {
  components: {
    NavBar,
    Wrapper
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
