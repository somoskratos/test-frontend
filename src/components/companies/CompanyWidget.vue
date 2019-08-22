<template>
  <router-link
    class="widget mb-3 p-3 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center"
    :to="{name: 'company', params: {id: this.id}, props: {id: this.id}}"
  >
  <div class="img">    
    <img :src="imgSrc" :alt="title" class="rounded-circle" />
  </div>
    <span class="title mt-5">{{title}}</span>
  </router-link>
</template>

<script>
export default {
  name: "CompanyWidget",
  props: ["title", "id", "imgSrc"]
};
</script>

<style lang="scss" scoped>
.widget {
  text-decoration: none;
  border: $primary-border;
  background-color: $primary-background;
}
.title {
  color: $text-primary;
  font-size: $font-lg;
}

.img {
  height: 94px;
  width: 177px;
}
img {
  width: 70%;
  height: 100%;
}

@media (max-width: $tablets) { 
  img {
    width: 50%;
    height: 80%;
  }
}
</style>
