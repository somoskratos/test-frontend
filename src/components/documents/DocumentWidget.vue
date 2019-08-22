<template>
  <div
    class="mx-2 p-3 p-lg-0 col-12 col-md-4 col-lg-3 col-xl-2 d-flex row mb-4 widget align-items-center justify-content-start"
  >
    <div v-if="valid" class="col-12 d-flex">
      <i class="fvalid fas fa-stamp"></i>
      <b-badge class="valid ml-2">VÁLIDO</b-badge>
    </div>
    <div v-else class="col-12 d-flex">
      <i class="finvalid fas fa-stamp "></i>
      <b-badge class="invalid ml-2">INVÁLIDO</b-badge>
    </div>
    <div class="col-12 d-flex flex-column justify-content-start align-items-start">
      <span class="title mb-3">{{title}}</span>
      <span class="date" >Criado em: {{maskInfo(createdAt)}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocumentWidget",
  props: ["valid", "title", "createdAt"],
  methods: {
    maskInfo(date) {
      const match = date.match(/\d+-\d+-\d+/)[0]
      let masked = ''
      masked += match.slice(8) + '/'
      masked += match.slice(5, 7) + '/'
      masked += match.slice(0, 4)
      return masked
    }
  }
}
</script>

<style lang="scss" scoped>
.valid {
  background-color: $success;  
  font-size: $font-sm;
  font-weight: bold;
}
.fvalid {
  color: $success;
}
.invalid {
  font-size: $font-sm;
  background-color: $warning;
  font-weight: bold;
}
.finvalid {
  color: $warning;
}
.title {
  font-size: $font-xl;
  color: $text-document-title;
}
.date {
  font-size: $font-md;
  color: $text-secondary;
}

.widget {
  border: $primary-border;
  background-color: $primary-background;
  height: $widget-sm;
  max-height: $widget-sm;
}
</style>
