<template>
  <div id="app">
    <NavBar />
    <Wrapper>
      <router-view />
    </Wrapper>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Wrapper from "@/components/Wrapper";
import { mapActions } from  "vuex";
export default {
  components: {
    NavBar,
    Wrapper
  },
  methods: {
    ...mapActions(['getPartners'])
  },
  beforeMount() {
    return this.getPartners(); 
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
