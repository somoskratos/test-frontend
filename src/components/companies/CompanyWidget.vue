<template>
  <router-link
    class="widget mb-3 p-3 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center"
    :to="{name: 'company', params: {id: this.id}, props: {id: this.id}}"
  >
  <div class="img mt-2">    
    <img :src="imgSrc" :alt="title" class="rounded-circle" />
  </div>
    <span class="title mt-3">{{title}}</span>
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
  height: $widget-img-h;
  width: $widget-img-w;
}
img {
  width: $widget-img-scale-md-w;
  height: $widget-img-scale-md-h;
}

@media (max-width: $tablets) { 
  img {
    width: $widget-img-scale-sm-w;
    height: $widget-img-scale-sm-h;
  }
}
</style>
