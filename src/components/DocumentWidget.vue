<template>
  <router-link
    tag="div"
    path="Dados do documento"
    :to="{ name: 'empresas.documentos.view', params: { partnerId: partnerId, documentId: document.id } }"
    class="DocumentWidget d-flex flex-column justify-content-start align-items-start text-left"
  >
    <!-- Lorempixel down! -->
    <div class="--Header d-flex flex-row">
      <font-awesome-icon icon="stamp" :style="document.valid ? {color: '#14CB93'} : {color: '#FFB11B'}"/>
      <div class="--Expired" :style="document.valid ? [{backgroundColor: '#14CB93'}] : [{backgroundColor: '#FFB11B'}]">
        {{document.valid ? 'Válido' : 'Inválido'}}
      </div>
    </div>
    <span class="--Name">{{document.nome}}</span>
    <span>Criado em {{formatedCreatedAt}}</span>
  </router-link>
</template>

<script>
import moment from 'moment';
export default {
  name: "DocumentWidget",
  props: {
    partnerId: String,
    document: Object|| null
  },
  computed: {
    formatedCreatedAt: function () {
      return (document ? moment(document.criadoEm).format('DD/MM/YYYY') : null);
    }
  }
};
</script>

<style lang="scss" scoped>
$screen-sm-max: 578px;
.DocumentWidget {
  width: 25px;
  margin-bottom: 20px;
  @media screen and (max-width: #{$screen-sm-max}) {
    margin-bottom: 19px;
    min-width: 100%;
  }
  min-height: 140px;
  min-width: 24%;
  cursor: pointer;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 25px 25px 28px;
  .--Header {
    margin-bottom: 16px;
    svg {
      font-size: 17px;
      margin-right: 8px;
    }
    .--Expired {
      border-radius: 5px;
      font-family: Encode Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 10px;
      line-height: 15px;
      text-align: center;
      color: #FFFFFF;
      padding: 1px 10px 0px 11px;
    }
  }
  .--Name {
    margin-bottom: 10px;
    font-family: Encode Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 15px;
    color: #626262;
  }
  span {
    font-family: Encode Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.385185px;
    color: #797979;
  }
}
</style>
