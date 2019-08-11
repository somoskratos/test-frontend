<template>
  <div>
      
  </div>
</template>

<script>
import CompanyWidget from '@/components/companies/CompanyWidget.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CompaniesList',
    components: { CompanyWidget },
    computed: {
        ...mapGetters('companies',[
            'getCompaniesList'
        ])        
    },
    methods: {
        ...mapActions('companies', [
            'fetchCompanies',
            'selectCompany'
        ])
    },
    mounted() {
        this.fetchCompanies()        
    }
}
</script>

<style>

</style>