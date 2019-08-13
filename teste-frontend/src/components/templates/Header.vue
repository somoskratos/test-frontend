<template>
  <b-navbar class="d-flex navbar justify-content-between p-0">
    <b-navbar-nav class="p-3 col-12 col-md-2 logo d-flex justify-content-center align-items-center" >
      <router-link to='/companies'>
        <img src="@/assets/Logo.svg" alt="Logo">
      </router-link>  
    </b-navbar-nav>
      <b-navbar-nav class="icon d-md-flex col-md-1 align-items-center justify-content-center">
        <router-link to="signout">
          <i class="fas fa-sign-out-alt fa-2x"></i>
        </router-link>
      </b-navbar-nav>
  </b-navbar >
</template>

<script>
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
.fa-sign-out-alt {
  color: rgb(215, 215, 215);
}
.navbar {
  background-color: #fff;
  height: 100px;
  border-bottom: 1px solid rgb(215, 215, 215);
}
.logo {
  height: 100%;
  border-right: 2px solid rgb(245, 245, 245);
}
img {
  height: 30px;
}

.icon {
  display: none;
  height: 70%;
  border-left: 2px solid rgb(245, 245, 245);
  
}

</style>