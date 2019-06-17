<template>
  <div class="DocumentsView d-flex flex-row align-items-center justify-content-center">
    <DocumentWidget
      v-if="actualDocument"
      :document="actualDocument"
      :partnerId="this.$route.params.partnerId"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import DocumentWidget from '@/components/DocumentWidget';

export default {
  name: 'DocumentsView',
  components: {
    DocumentWidget,
  },
  computed: {
    ...mapState(['actualDocument', 'actualPartner']),
  },
  methods: {
    ...mapActions(['setActualDocument'])
  },
  mounted() {
    const { partnerId, documentId } = this.$route.params;
    this.setActualDocument({partnerId, documentId});
  }
};
</script>

<style lang="scss" scoped>
  .DocumentsView {
    min-height: calc(100vh - 61px);
  }
</style>

