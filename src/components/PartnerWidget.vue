<template>
  <div class="PartnerWidget d-flex flex-column justify-content-center align-items-center text-center">
    <!-- Lorempixel down! -->
    <img :src="partner.logo.replace('lorempixel', 'loremflickr')" :alt="partner.name" height="99px" width="99px">
    <span>{{partner.nomeFantasia}}</span>
  </div>
</template>

<script>
export default {
  name: "PartnerWidget",
  props: {
    partner: Object
  }
};
</script>

<style lang="scss" scoped>
$screen-sm-max: 578px;
.PartnerWidget {
  background: #FFFFFF;
  border: 1px solid #ECECEC;
  box-sizing: border-box;
  min-width: 359px;
  min-height: 235px;
  @media screen and (max-width: #{$screen-sm-max}) {
    min-width: 100%;
    min-height: 195px;
  }
  img {
    border-radius: 50%;
    border: 2px solid #E7E7E7;
  }
  span {
    margin-top: 18.55px;
    @media screen and (max-width: #{$screen-sm-max}) {
      margin-top: 9px;
    }
    font-family: Encode Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.503704px;
    color: #3F3F3F;
  }
}
</style>
