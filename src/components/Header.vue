<template>
  <header class="k-header">
    <router-link :to="{ name: 'DashClient' }">
      <img src="../assets/logo.svg" alt="Kratos" class="k-h-img">
    </router-link>
    <i class="fa fa-sign-out fa-2x "></i>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>

.k-header {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 1px #ccc;
  background-color: #fff;
}

.fa {
  color: #999;
  padding: 10px;
}
.k-h-img {
  padding: 10px;
  height: 25px;
  box-shadow: 3px 0px 0px 0px #ddd;
}
</style>
