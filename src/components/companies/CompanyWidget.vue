<template>
  <router-link
    class="widget mb-4 p-3 p-lg-5 d-flex flex-column bg-white align-items-center justify-content-center text-center"
    :to="{name: 'company', params: {id: this.id}, props: {id: this.id}}"
  >
    <img :src="imgSrc" :alt="title" class="rounded-circle" style="height: 120px; width: 120px;" />
    <span class="text-muted mt-5">{{title}}</span>
  </router-link>
</template>

<script>
export default {
  name: "CompanyWidget",
  props: ["title", "id", "imgSrc"]
};
</script>

<style scoped>
.widget {
  text-decoration: none;
  border: 1px solid lightgrey;
}
</style>
