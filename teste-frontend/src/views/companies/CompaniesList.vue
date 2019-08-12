<template>
  <div class="row justify-content-center align-items-center mt-5 col-12">
      <span class="text-dark col-6 text-center mb-2">Suas Empresas</span>
      <span class="text-muted col-8 text-center mb-5">Clique em uma de suas empresas para acessar seu perfil no Contador Online</span>
      <div v-for="(CompaniesSubList, index) in getCompaniesList" :key="index"
        class="col-8 d-flex flex-wrap justify-content-center">
            <CompanyWidget class="col-12 col-md-5 compact"
            :title="CompaniesSubList[0].nomeFantasia" :id="CompaniesSubList[0].id" :imgSrc="CompaniesSubList[0].logo"/>
            <CompanyWidget class="col-12 col-md-5 extended"
            :title="CompaniesSubList[1].nomeFantasia" :id="CompaniesSubList[1].id" :imgSrc="CompaniesSubList[1].logo"/>
            <CompanyWidget class="col-12 col-md-5 compact"
            :title="CompaniesSubList[2].nomeFantasia" :id="CompaniesSubList[2].id" :imgSrc="CompaniesSubList[2].logo"/>
      </div>
  </div>
</template>

<script>
import CompanyWidget from '@/components/companies/CompanyWidget'
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

<style scoped>
.compact {
    height: 250px;
}

.extended {
    height: 500px;
    
}
@media (max-width: 775px) {
    .extended {
        height: 250px;
    }      
}

.text-dark {
    font-size: 16pt;
}
.text-secondary {
    font-size: 12pt;
}
</style>