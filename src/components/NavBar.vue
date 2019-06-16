<template>
  <b-navbar class="NavBar" fixed="top" toggleable="lg">
    <b-navbar-brand class="__Logo d-flex m-0" href="/">
      <img src="/Logo.svg" height="22.85px" width="100px">
    </b-navbar-brand>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item
        class="__Logout d-flex"
        href="http://www.google.com/search?source=hp&ei=LOAFXey8Cc3C5OUPgM2MqAo&q=kratos+cg+ms&oq=kratos+cg+ms"
      >
        <font-awesome-icon icon="sign-out-alt"/>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
.NavBar {
  padding: 0;
  max-height: 61px;
  min-height: 61px;
  background: #ffffff;
  border: 1px solid #ececec;
  box-sizing: border-box;
  .__Logo {
    border-right: 1px solid #ececec;
    height: 100%;
    padding: 19px 17px 19.16px 16px;
  }
  .__Logout {
    height: 100%;
    padding: 13px 21px 13px 25px;
    border-left: 1px solid #ececec;
    a {
      display: flex;
      height: 100%;
      padding: 0;
      svg {
        font-size: 18px;
        color: #ececec;
      }
    }
  }
}
</style>
