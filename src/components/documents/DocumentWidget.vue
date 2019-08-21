<template>
  <div
    class="mx-2 p-3 p-lg-0 col-12 col-md-4 col-lg-3 col-xl-2 d-flex row bg-white mb-4 widget align-items-center justify-content-start"
  >
    <div v-if="valid" class="col-12 d-flex">
      <i class="fas fa-stamp text-success"></i>
      <b-badge class="bg-success text-white ml-2">VÁLIDO</b-badge>
    </div>
    <div v-else class="col-12 d-flex">
      <i class="fas fa-stamp text-warning"></i>
      <b-badge class="bg-warning text-white ml-2">INVÁLIDO</b-badge>
    </div>
    <div class="col-12 d-flex flex-column justify-content-start align-items-start">
      <span class="text-dark mb-3">{{title}}</span>
      <span class="text-muted">Criado em: {{maskInfo(createdAt)}}</span>
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

<style scoped>
.widget {
  border: 1px solid lightgrey;
  height: 160px;
  max-height: 160px;
}

b-badge {
  font-size: 1rem;
}
</style>
