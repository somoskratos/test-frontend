<template>
  <div class="k-d-content">
    <div>
      <p class="k-d-h1">Suas Empresas</p>
      <span class="k-d-span">
        Clique em uma de suas empresas para acessar
        <br />seu perfil no Contador Online
      </span>
    </div>
    <div v-for="(node,i) in Wrap" :key="i" class="k-b-client">
      <WidgetCompany v-for="(Company, index) in node" :key="Company.id"
      :logo="Company.logo"
      :nomeFantasia="Company.nomeFantasia"
      :id="Company.id"
      :area="getArea(index)">
      </WidgetCompany>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
import WidgetCompany from '@/components/WidgetCompany.vue'
import { companysURL } from '@/global.js'
export default {
  name: 'DashClient',
  components: { WidgetCompany },
  data: function () {
    return {
      Companys: [],
      Wrap: []
    }
  },
  methods: {
    fetchClientCompanys: async function () {
      await Axios.get(companysURL)
        .then(data => {
          this.Companys = data.data
          let j = 0
          for (let i = 0; i <= this.Companys.length - 3; i += 3) {
            this.Wrap[j++] = [
              this.Companys[i],
              this.Companys[i + 1],
              this.Companys[i + 2]
            ]
          }
          this.$forceUpdate()
        }).catch(err => console.log(err))
    },
    getArea: function (index) {
      return `grid-area: company${index + 1}`
    }
  },
  mounted () {
    this.fetchClientCompanys()
  }
}
</script>

<style>
.k-d-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1fr;
}

.k-b-client {
  display: grid;
  position: relative;
  margin: 20px 20px;
  grid-template-areas: "company1 company2"
                       "company3 company2";
  grid-template-columns: 350px 350px;
  grid-template-rows: 250px 250px;
  grid-row-gap: 25px;
  grid-column-gap: 25px;
}

.k-d-h1 {
  margin-top: 80px;
  color: #555;
  font-size: 16pt;
}

.k-d-span {
  flex-wrap: wrap;
  color: #888;
  margin-bottom: 50px;
}

@media(max-width: 720px) {
  .k-b-client {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 180px;
    justify-content: space-between;
    padding: 50px;
  }
}
</style>
