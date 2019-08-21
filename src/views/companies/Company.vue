<template>
  <div class="d-flex row align-items-start justify-content-around p-4 p-md-5">
    <Panel class="d-flex align-items-start justify-content-around col-12" />
    <span class="col-12 text-dark text-center mb-4 mt-4">Documentos</span>
    <div class="col-12 d-flex flex-wrap p-3 m-0 justify-content-start">
      <DocumentWidget
        v-for="Document in getDocuments"
        :key="Document.id"
        :valid="!Document.vencido"
        :title="Document.nome"
        :createdAt="Document.criadoEm"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DocumentWidget from "@/components/documents/DocumentWidget";
import Panel from "@/components/companies/Panel"

export default {
  name: "Company",
  components: { DocumentWidget, Panel },
  props: ["id"],
  computed: {
    ...mapGetters("companies", ["getCurrentCompany", "getDocuments"])
  },
  methods: {
    ...mapActions("companies", ["fetchDocuments", "selectCompany"]),
    ...mapActions("company", ["maskInfo"])
  },
  mounted() {
    this.selectCompany(this.id).then(() => {
      this.maskInfo(this.getCurrentCompany)
    })
    this.fetchDocuments(this.id);
  }
};
</script>


<style scoped>
.text-dark {
  font-size: 1.5rem;
}
</style>
