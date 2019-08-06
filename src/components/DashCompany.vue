<template>
    <div class="k-d-company">
      <div class="k-d-c-header">
        <img :src="acctualCompany.logo" alt="logo" class="k-c-big-logo">
        <div class="k-c-tag">
          <div class="d-wrap-1">
            <span class="k-c-name">{{acctualCompany.nomeFantasia}}</span>
            <span class="k-c-type">{{getTipo(acctualCompany.nomeFantasia)}}</span>
          </div>
          <div class="d-wrap-2">
            <div><i class="fa fa-home"></i><span class="k-c-addr">
            {{acctualCompany.endereco}}. {{acctualCompany.cidade}}, {{acctualCompany.estado}}, {{acctualCompany.pais}}
          </span></div>
          </div>
          <div class="d-wrap-3">
            <div><i class="fa fa-address-card"></i><span class="k-c-cnpj">{{acctualCompany.cnpj.slice(0, 7)}}/{{acctualCompany.cnpj.slice(8, 12)}}-{{acctualCompany.cnpj.slice(12)}}</span></div>
            <div><i class="fa fa-phone"></i><span class="k-c-phone">({{acctualCompany.telefone.slice(0,2)}}) {{acctualCompany.telefone.slice(2,6)}}-{{acctualCompany.telefone.slice(6, 10)}}</span></div>
            <div><i class="fa fa-envelope"></i><span class="k-c-email">{{acctualCompany.email}}</span></div>
          </div>
        </div>
      </div>
      <div class="k-b-company">
        <span class="k-c-doc">Documentos</span>
        <div class="k-c-documents">
          <WidgetDoccument v-for="Document in documents" :key="Document.id"
          :nome="Document.nome"
          :criadoEm="Document.criadoEm"
          :vencido="Document.vencido"
          >
          </WidgetDoccument>
        </div>
      </div>
    </div>
</template>

<script>
import WidgetDoccument from './WidgetDoccument.vue'
import Axios from 'axios'
import { companyURL, documentsURL } from '../global'
export default {
  name: 'DashCompany',
  components: { WidgetDoccument },
  data: function () {
    return {
      acctualCompany: {},
      documents: []
    }
  },
  methods: {
    getTipo (nome) {
      let tipo = nome.slice(nome.length - 4, nome.length)
      return tipo === 'LTDA' || tipo === 'ltda' ? 'Sociedade Empresária Limitada' : 'Sociedade Anônima'
    },
    async getCompanyAndDocs () {
      let url = this.$el.baseURI
      let length = this.$el.baseURI.length
      let id = Number.parseInt(url.charAt(length - 1))

      if (url.charAt(length - 2) !== '/') {
        id += (10 * Number.parseInt(url.charAt(length - 2)))
        console.log(id)
        if (url.charAt(length - 3) !== '/') {
          id += (100 * Number.parseInt(url.charAt(length - 3)))
          console.log(id)
          if (url.charAt(length - 4) !== '/') {
            id += (1000 * Number.parseInt(url.charAt(length - 4)))
          }
        }
      }
      await Axios.get(companyURL(id)).then(resp => {
        this.acctualCompany = resp.data
      }).catch(err => console.log(err))
      await Axios.get(documentsURL(id)).then(resp => {
        this.documents = resp.data
      }).catch(err => console.log(err))

      this.$forceUpdate()
    }
  },
  mounted () {
    this.getCompanyAndDocs()
  }
}
</script>

<style>
.k-d-company {
  display: flex;
  position: relative;
  height: 100%;
  flex-direction: column;
  margin-right: 0px;
}
.k-d-c-header {
  display: flex;
  height: 180px;
  width: 95%;
  margin: 25px;
  justify-content: center;
  align-items: center;

}
.k-c-tag {
  box-shadow:1px 1px 1px 1px #999;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 25px;
  width: 100%;
  height: 180px;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px 5px #999;
  padding: 20px;
}
.k-c-big-logo {
  width: 50;
  height: 200px;
  border-radius: 50%;
  box-shadow:1px 1px 1px 1px #999;
}

.d-wrap-1, .d-wrap-2, .d-wrap-3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
}
.d-wrap-2, .d-wrap-3 {
  color: #888;
}

.d-wrap-1 {
  margin-left: 10px;
}

.k-c-name {
  font-size: 16pt;
  color: #333;
}

.k-c-type {
  display: flex;
  color: #fff;
  background-color: #04f183;
  height: 35px;
  width: 250px;
  justify-content: center;
  align-items: center;
  font-weight: 800;
}

.k-c-doc {
  display: flex;
  font-size: 16pt;
  color: #333;
  width: 100%;
}

.k-b-company {
  display: grid;
  margin: 25px;
  width: 100%;
  height: 100%;
}

.k-c-documents {
  display: flex;
  flex-flow: column, wrap;
  margin-right: 25px;

}

</style>
