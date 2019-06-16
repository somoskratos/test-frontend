<template>
  <div class="Wrapper d-flex">
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "Wrapper"
}
</script>

<style lang="scss" scoped>
.Wrapper {
  background: #F7F7F7;
  min-height: 100vh;
  padding-top: 61px !important;
  main {
    min-height: 100%;
    min-width: 100%;
  }
}
</style>
