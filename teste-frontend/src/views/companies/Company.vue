<template>
  <div class="d-flex row justify-content-center">
    <span class="col-12 text-center">Documentos</span>
    <b-card-group deck class="col-12 d-flex">
      <DocumentWidget class="col-12 col-md-4" v-for="Document in getDocuments" :key="Document.id"
      :valid="!Document.vencido" :title="Document.nome" :createdAt="Document.criadoEm" />
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
      ...mapGetters('companies', ['getCurrentCompany','getDocuments'])
    },
    methods: {
      ...mapActions('companies', ['fetchDocuments', 'selectCompany'] )
    },
    mounted() {
      this.selectCompany(this.id)
      this.fetchDocuments(this.id)
    }

}
</script>

<style>

</style>
