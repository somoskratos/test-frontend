<template>
  <div class="d-flex row justify-content-center align-items-center mt-5 col-12">
      <span class="text-dark col-10 text-center mb-3">Suas Empresas</span>
      <span class="text-muted col-8 col-md-6 text-center text-wrap mb-5">Clique em uma de suas empresas para acessar seu perfil no Contador Online</span>
      <div v-for="(CompaniesSubList, index) in getCompaniesList" :key="index"
        class="col-12 col-lg-8 d-flex justify-content-center align-items-center flex-wrap">
        <div class="col-12 col-lg-6 d-flex flex-row justif-content-center align-items-center flex-wrap">
            <CompanyWidget class="compact col-12"
            :title="CompaniesSubList[0].nomeFantasia" :id="CompaniesSubList[0].id" :imgSrc="CompaniesSubList[0].logo"/>
            <CompanyWidget class="compact col-12"
            :title="CompaniesSubList[1].nomeFantasia" :id="CompaniesSubList[1].id" :imgSrc="CompaniesSubList[1].logo"/>
        </div>
        <div class="col-12 col-lg-6 d-flex flex-row">
            <CompanyWidget class="extended col-12"
            :title="CompaniesSubList[2].nomeFantasia" :id="CompaniesSubList[2].id" :imgSrc="CompaniesSubList[2].logo"/>
        </div>
            
            
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
            'fetchCompanies'
        ])
    },
    mounted() {
        this.fetchCompanies()        
    }
} 
</script>

<style scoped>
.compact {
    height: 300px;
}

.extended {
    height: 632px;
    
}
@media (max-width: 775px) {
    .extended {
        height: 300px;
    }      
}
.text-dark {
    font-size: 16pt;
}
.text-secondary {
    font-size: 14pt;
}
</style>
