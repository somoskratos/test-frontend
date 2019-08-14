<template>
  <div class="d-flex row justify-content-center">
    <span class="col-12 text-center mb-4 mt-4">Documentos</span>
    <div class="col-12 d-flex flex-wrap p-3 m-0 justify-content-center">
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
</style>
