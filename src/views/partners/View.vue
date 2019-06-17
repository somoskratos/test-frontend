<template>
<!-- TODO BUG DONT EXISTS ACTUAL PARTNER YET FOR REPLACE DATA. -->
  <div class="PartnersView d-flex flex-column align-items-start">
    <div class="__PartnerContent">
      <img :src="actualPartner.logo ? actualPartner.logo.replace('lorempixel', 'loremflickr') : null" :alt="actualPartner.nomeFantasia">
      <div class="--Data">
        <div class="--Header d-flex flex-row">
          <div class="--FantasyName">
            <span>{{actualPartner.nomeFantasia}}</span>
          </div>
          <div class="--SocialName ml-auto">
            {{actualPartner.razaoSocial}}
          </div>
        </div>
        <div class="--Address d-flex flex-row align-items-start">
          <font-awesome-icon icon="home"/>
          <span>{{actualPartner.endereco}}, {{actualPartner.cidade}}, {{actualPartner.estado}}, {{actualPartner.pais}}</span>
        </div>
        <div class="--DocPhoneMail d-flex flex-row align-items-start">
          <div class="--Doc">
            <font-awesome-icon icon="id-card"/>
            <span>{{actualPartner.cnpj ? actualPartner.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5") : null}}</span>
          </div>
          <div class="--Phone">
            <font-awesome-icon icon="phone-volume"/>
            <span style="margin-left: 5px;">{{actualPartner.telefone ? actualPartner.telefone.replace(/^(\d{2})(\d{4})(\d{4})/, "($1) $2-$3") : null}}</span>
          </div>
          <div class="--Mail d-flex flex-row">
            <font-awesome-icon icon="envelope"/>
            <span style="text-transform: lowercase">{{actualPartner.email}}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="actualPartner.documents" class="__Documents d-flex flex-column">
      <span class="--title">Documentos</span>
      <div class="--List d-flex flex-row flex-wrap justify-content-between">
        <DocumentWidget v-for="document in actualPartner.documents"
        :key="document.id"
        :document="document"
        :partnerId="actualPartner.id"
      />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import DocumentWidget from '@/components/DocumentWidget';

export default {
  name: 'PartnersView',
  components: {
    DocumentWidget
  },
  computed: {
    ...mapState(['actualPartner'])
  },
  methods: {
    ...mapActions(['setActualPartner'])
  },
  mounted() {
    this.setActualPartner(this.$route.params.id)
  }
};
</script>

<style lang="scss" scoped>
$screen-sm-max: 578px;
.PartnersView {
  padding: 48px 48px 48px 72px;
  @media screen and (max-width: #{$screen-sm-max}) {
    padding: 129px 20px 20px;
  }
  .__PartnerContent {
    display: flex;
    flex-direction: row;
    width: 100%;
    @media screen and (max-width: #{$screen-sm-max}) {
      position: relative;
      flex-direction: column;
    }
    img {
      background-color: #fff;
      margin-right: 23px;
      border-radius: 50%;
      padding: 5px;
      border: 2px solid rgb(126, 92, 92);
      min-height: 224px;
      height: 224px;
      min-width: 224px;
      width: 224px;
      @media screen and (max-width: #{$screen-sm-max}) {
        min-height: 154px !important;
        height: 154px !important;
        min-width:154px !important;
        width: 154px !important;
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
      }
    }
    .--Data {
      svg {
        margin-right: 14px;
      }
      font-family: Encode Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.385185px;
      color: #797979;
      width: 100%;
      padding: 39px 24px 42px 24px;
      background: #FFFFFF;
      border: 1px solid #E7E7E7;
      box-sizing: border-box;
      @media screen and (max-width: #{$screen-sm-max}) {
        padding-top: 74px;
      }
      .--Header {
        margin-bottom: 40px;
        .--FantasyName {
          @media screen and (max-width: #{$screen-sm-max}) {
            width: 100%;
          }
          span {
            margin-left: 10px;
            font-family: Encode Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.385185px;
            color: #3F3F3F;
            @media screen and (max-width: #{$screen-sm-max}) {
              margin: 0;
              font-size: 17px;
              line-height: 19px;
              text-align: center;
              letter-spacing: 0.503704px;
              max-width: 180px;
              text-align: center;
            }
          }
        }
        .--SocialName {
          min-width: 207px;
          min-height: 25px;
          padding: 6px 17px 7px;
          background: #14CB93;
          border-radius: 100px;
          font-family: Encode Sans;
          font-style: normal;
          font-weight: bold;
          font-size: 10px;
          line-height: 12px;
          text-align: center;
          letter-spacing: 0.645455px;
          color: #FFFFFF;
          @media screen and (max-width: #{$screen-sm-max}) {
            display: none;
          }
        }
      }
      .--Address {
        margin-bottom: 40px;
        @media screen and (max-width: #{$screen-sm-max}) {}
        svg {
          font-size: 17px;
          color: #797979;
        }
        span {
          text-align: left;
          font-family: Encode Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.385185px;
          color: #797979;
        }
      }
      .--DocPhoneMail {
        @media screen and (max-width: #{$screen-sm-max}) {
          display: flex;
          flex-direction: column !important;
        }
        svg {
          font-size: 17px;
          color: #797979;
        }
        span {
          margin-right: 54px;
          font-family: Encode Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.385185px;
          color: #797979;
        }
        .--Doc, .--Phone, .--Mail {
          @media screen and (max-width: #{$screen-sm-max}) {
            margin-bottom: 33px;
          }
        }
      }
    }
  }
  .__Documents {
    text-align: left;
    margin-top: 51px;
    width: 100%;
    @media screen and (max-width: #{$screen-sm-max}) {
      margin-top: 33px;
    }
    .--title {
      margin-bottom: 17px;
      font-family: Encode Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 19px;
      letter-spacing: 0.503704px;
      color: #3F3F3F;
    }
    .--List {
      @media screen and (max-width: #{$screen-sm-max}) {
        flex-direction: column !important;
      }
      .DocumentWidget:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>

