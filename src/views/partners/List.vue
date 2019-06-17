<template>
  <div class="List">
    <div class="__Header d-flex flex-column align-items-center">
      <span class="__title">Suas Empresas</span>
      <p>Clique em uma de suas empresas para acessar seu perfil no Contador Online</p>
    </div>
    <div class="__Partners d-flex flex-column justify-content-center align-items-center">
      <div v-for="x in 10" class="--Content">
        <div class="--FirstColumn d-flex flex-column justify-content-center align-items-center">
          <PartnerWidget v-if="x % 2 !== 0" class="h-100 mb-16" :partner="partnersSliced(x)[0]" />
          <PartnerWidget v-if="x % 2 !== 0" class="h-100" :partner="partnersSliced(x)[1]" />
          <PartnerWidget v-if="x % 2 === 0" class="h-100" :partner="partnersSliced(x)[2]" />
        </div>
        <div class="--SecondColumn d-flex flex-column justify-content-center align-items-center">
          <PartnerWidget v-if="x % 2 === 0" class="h-100 mb-16" :partner="partnersSliced(x)[0]" />
          <PartnerWidget v-if="x % 2 === 0" class="h-100" :partner="partnersSliced(x)[1]" />
          <PartnerWidget v-if="x % 2 !== 0" class="h-100" :partner="partnersSliced(x)[2]" />
        </div>
      </div>
    </div>
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
    ...mapState(['partners']),
  },
  methods: {
    partnersSliced(x) {
      return this.partners.slice(x, x + 3);
    },
    partnerWidgetClass(id) {
      if (id % 3 === 0) {
        return '__ThirdPartner';
      } else if (id % 2 === 0) {
        return '__SecondPartner';
      } else {
        return '__FirstPartner';
      }
    }
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
  .__Partners {
    min-width: 100%;
    .--Content {
      @media screen and (min-width: #{$screen-sm-max}) {
        display: flex; 
        flex-direction: row;
        margin-bottom: 15px !important;
      }
      @media screen and (max-width: #{$screen-sm-max}) {
        display: flex; 
        flex-direction: column;
        min-width: 100%;
        .PartnerWidget {
          margin-bottom: 15px !important;
        }
      }
    }
    .--FirstColumn {
      @media screen and (min-width: #{$screen-sm-max}) {
        margin-right: 15px;
        display: flex; 
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        margin-right: 15px;
      }
    }
  }
}
</style>

