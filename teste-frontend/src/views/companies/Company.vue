<template>
  <div class="d-flex row align-items-start justify-content-around p-4 p-md-5">
    <div
      class="logo d-flex justify-content-center align-items-center col-12 col-md-6 col-lg-3 rounded-circle bg-white"
      style="height: 300px;"
    >
      <img
        :src="getCurrentCompany.logo"
        alt
        class="rounded-circle"
        style="height: 80%; width: 80%;"
      />
    </div>
    <b-jumbotron bg-variant="white" class="jumbo col-12 col-md-12 col-lg-8 p-4">
      <div class="col-12 d-flex justify-content-between">
        <p class="text-dark col-12 col-md-6">{{getCurrentCompany.nomeFantasia}}</p>
        <b-badge
          pill
          class="d-none d-md-flex bg-success col-6 col-lg-4 justify-content-center align-items-center"
          style="max-height: 40px;"
        >{{getCompany.tipo}}</b-badge>
      </div>
      <div class="col-12 d-flex p-3 row">
        <i class="text-muted fa fa-home"></i>
        <p class="text-muted col-10">{{getCompany.endereco}}</p>
      </div>
      <div class="col-12 d-flex flex-column row justify-content-between align-items-between">
        <div class="d-flex p-0">
          <i class="text-muted fas fa-id-card"></i>
          <p class="text-muted col-10">{{getCompany.cnpj}}</p>
        </div>
        <div class="d-flex p-0">
          <i class="text-muted fas fa-phone"></i>
          <p class="text-muted col-10">{{getCompany.phone}}</p>
        </div>
        <div class="d-flex p-0">
          <i class="text-muted fas fa-envelope"></i>
          <p class="text-muted col-10 d-flex flex-wrap">{{getCurrentCompany.email}}</p>
        </div>
      </div>
    </b-jumbotron>

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

export default {
  name: "Company",
  components: { DocumentWidget },
  props: ["id"],
  computed: {
    ...mapGetters("companies", ["getCurrentCompany", "getDocuments"]),
    ...mapGetters("company", ["getCompany"])
  },
  methods: {
    ...mapActions("companies", ["fetchDocuments", "selectCompany"]),
    ...mapActions("company", ["maskThis"])
  },
  mounted() {
    this.selectCompany(this.id).then(_ => {
      this.maskThis(this.getCurrentCompany);
    });
    this.fetchDocuments(this.id);
  }
};
</script>


<style scoped>
@media (min-width: 991px) {
  .logo {
    height: 220px;
  }
}

.text-dark {
  font-size: 1.5rem;
}
.jumbo {
  border: 1px solid rgb(240, 240, 240);
}
.rounded-circle {
  border: 2px solid rgb(240, 240, 240);
}
</style>
