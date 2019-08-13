<template>
  <div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DocumentWidget from '@/components/documents/DocumentWidget.vue'

export default {
    name: 'Company',
    componenents: { DocumentWidget },
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