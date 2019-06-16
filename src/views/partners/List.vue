<template>
  <div class="List">
    <div class="__Header d-flex flex-column align-items-center">
      <span class="__title">Suas Empresas</span>
      <p>Clique em uma de suas empresas para acessar seu perfil no Contador Online</p>
    </div>
    <PartnerWidget v-for="partner in partners" :key="partner.id" :partner="partner"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PartnerWidget from "@/components/PartnerWidget";
export default {
  name: 'List',
  components: {
    PartnerWidget
  },
  computed: {
    ...mapState(['partners'])
  }
};
</script>

<style lang="scss" scoped>
$screen-sm-max: 578px;
.List {
  padding: 64px 254px 53px 253px;
  @media screen and (max-width: #{$screen-sm-max}) {
    padding-top: 48px;
    padding: 48px 20px 21px;
  }
  .__Header {
    text-align: center;
    .__title {
      font-family: Encode Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 21px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.503704px;
      color: #3F3F3F;
    }
    p {
      @media screen and (max-width: #{$screen-sm-max}) {
        max-width: 275px;
        margin-bottom: 17px;
      }
      margin-bottom: 24px;
      max-width: 285px;
      font-family: Encode Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 19px;
      /* or 146% */

      text-align: center;
      letter-spacing: 0.503704px;

      color: #797979;
      margin-top: 23px;
    }
  }
}
</style>

