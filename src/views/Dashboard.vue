<template>
  <div class="Dashboard d-flex flex-column align-items-center justify-content-center">
    <router-link
      tag="div"
      path="Lista de empresas"
      :to="{ name: 'empresas.list' }"
      class="__Link d-flex flex-column justify-content-center align-items-center"
    >
    Empresas
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
}
</script>

<style lang="scss" scoped>
.Dashboard {
  min-height: 100%;
  min-width: 100%;
  background: #F7F7F7;
  .__Link {
    cursor: pointer;
    padding: 10px 70px;
    box-shadow: #acacac 1px 1px 5px;
    background: #FFFFFF;
    border: 1px solid #ECECEC;
    border-radius: 3px;
    box-sizing: border-box;
  }
}
</style>
