<template>
  <div class="d-flex row justify-content-between align-items-start p-4">
    <div class="d-flex justify-content-center  align-items-center 
    col-12 col-md-4 col-lg-2 rounded-circle bg-white" style="height: 250px; width: 250px;">
      <img :src="getCurrentCompany.logo" alt="" class="logo rounded-circle"
      style="height: 160px; width: 160px;">    
    </div>
    <b-jumbotron :lead="getCurrentCompany.nomeFantasia" bg-variant="white"
     class="col-12 col-md-8 col-lg-10 p-5">
        <div class="col-12 mb-4 mt-4">
          <i class="text-muted fa fa-home"></i>
        </div>
        <div class="col-12 d-flex flex-column  justify-content-between align-items-between">
          <i class="text-muted fas fa-id-card"></i>
          <i class="text-muted fas fa-phone"></i>
          <i class="text-muted fas fa-envelope"></i>
        </div>
    </b-jumbotron>

    <span class="col-12 text-center mb-4 mt-4">Documentos</span>
    <div class="col-12 d-flex flex-wrap p-3 m-0 justify-content-start">
      <DocumentWidget v-for="Document in getDocuments" :key="Document.id"
        :valid="!Document.vencido"
        :title="Document.nome"
        :createdAt="Document.criadoEm" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DocumentWidget from '@/components/documents/DocumentWidget'

export default {
    name: 'Company',
    components: { DocumentWidget },
    props: ['id'],
    computed: {
      ...mapGetters('companies', [
        'getCurrentCompany',
        'getDocuments'
        ])
    },
    methods: {
      ...mapActions('companies', [
        'fetchDocuments',
        'selectCompany'
        ])
    },
    mounted() {
      this.selectCompany(this.id)
      this.fetchDocuments(this.id)
    }

}
</script>


<style scoped>
.text-center {
  font-size: 1.5rem;
}

.rounded-circle {
  border: 1px solid rgb(240, 240, 240);
}
</style>
