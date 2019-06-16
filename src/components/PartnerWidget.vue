<template>
  <div class="PartnerWidget d-flex flex-column justify-content-center align-items-center text-center">
    <img :src="img" :alt="img" height="99px" width="99px">
    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  name: "PartnerWidget",
  props: {
    img: String,
    name: String
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
