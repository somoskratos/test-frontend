<template>
  <div class="PartnersView">
    {{actualPartner}}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'PartnersView',
  computed: {
    ...mapState(['actualPartner'])
  },
  methods: {
    ...mapActions(['setActualPartner'])
  },
  mounted() {
    this.setActualPartner(this.$route.params.id)
    console.log(this.actualPartner);
  }
};
</script>
