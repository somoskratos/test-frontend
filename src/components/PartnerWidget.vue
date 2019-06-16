<template>
  <div class="PartnerWidget d-flex flex-column justify-content-center align-items-center text-center">
    <!-- Lorempixel down! -->
    <img :src="partner.logo.replace('lorempixel', 'loremflickr')" :alt="partner.name" height="99px" width="99px">
    <span>{{partner.name}}</span>
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
.PartnerWidget {
  background: #FFFFFF;
  border: 1px solid #ECECEC;
  box-sizing: border-box;
  span {
    margin-top: 18.55px;
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
