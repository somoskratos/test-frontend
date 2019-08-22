<template>
  <b-navbar class="d-flex navbar justify-content-between p-0">
    <b-navbar-nav
      class="p-3 col-12 col-md-3 col-lg-2 logo d-flex justify-content-center align-items-center"
    >
      <router-link to="/companies">
        <img src="@/assets/Logo.svg" alt="Logo" />
      </router-link>
    </b-navbar-nav>
    <b-navbar-nav
      class="p-0 icon d-none d-md-flex col-md-2 col-lg-1 align-items-center justify-content-center"
    >
      <router-link to="signout">
        <i class="fas fa-sign-out-alt fa-2x"></i>
      </router-link>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.fa-sign-out-alt {
  color: $text-secondary;
}
.navbar {
  height: 100px;
  border-bottom: $primary-border;
  background-color: $primary-background;
}
.logo {
  height: 100%;
  border-right: $secondary-border;
}
.icon {
  height: 100%;
  border-left: $secondary-border;
}

img {
  height: 30px;
}
</style>
