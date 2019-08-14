<template>
  <div class="d-flex row justify-content-center">
    <span class="col-12 text-center mb-4 mt-4">Documentos</span>
    <b-card-group deck class="col-10 d-flex justify-content-between">
      <DocumentWidget class="col-12 col-md-2" v-for="Document in getDocuments" :key="Document.id"
        :valid="!Document.vencido"
        :title="Document.nome"
        :createdAt="Document.criadoEm" />
    </b-card-group>
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


<style>

</style>
