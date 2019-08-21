<template>
  <div class="d-flex row align-items-start justify-content-around p-4 p-md-5">
    <div
      class="logo d-flex justify-content-center align-items-center col-10 col-sm-6 col-md-4 col-lg-3 border border-grey rounded-circle bg-white"
    >
      <img
        :src="getCurrentCompany.logo"
        alt
        class="rounded-circle border border-grey"
      />
    </div>
    <b-jumbotron bg-variant="white" border-variant="grey" class="panel col-12 col-lg-8 p-4">
      <div class="name col-12 d-md-flex justify-content-between">
        <p class="text-dark col-12 col-md-6">{{getCurrentCompany.nomeFantasia}}</p>
        <b-badge
          pill
          class="d-none d-md-flex bg-success col-6 col-lg-5 justify-content-center align-items-center"
        >{{getCompany.tipo}}</b-badge>
      </div>
      <div class="col-12 d-flex p-3 row">
        <i class="text-muted fa fa-home"></i>
        <p class="text-muted col-10">{{getCompany.endereco}}</p>
      </div>
      <div class="col-11 d-md-flex justify-content-between align-items-center p-2 row">
        <div class="d-flex p-0 col-md-4 justify-content-center align-items-around">
          <i class="text-muted fas fa-id-card"></i>
          <p class="text-muted col-10">{{getCompany.cnpj}}</p>
        </div>
        <div class="d-flex p-0 col-md-3  justify-content-center align-items-around">
          <i class="text-muted fas fa-phone"></i>
          <p class="text-muted col-10">{{getCompany.phone}}</p>
        </div>
        <div class="d-flex p-0 col-md-4  justify-content-center align-items-around">
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
    ...mapActions("company", ["maskInfo"])
  },
  mounted() {
    this.selectCompany(this.id).then(() => {
      this.maskInfo(this.getCurrentCompany);
    });
    this.fetchDocuments(this.id);
  }
};
</script>


<style scoped>
.text-dark {
  font-size: 1.5rem;
}
.logo {
  height: 250px;  
}

img {
  height: 85%;
  width: 85%;
}
@media (max-width: 991px) {
  .logo {
    position: absolute;
    z-index: 1;
  }
  img {    
    height: 75%;
    width: 75%;
  }    
  .panel {
    margin-top: 150px;
  }
  .name {
    margin-top: 100px;
  }
}
b-badge {
  max-height: 35px;
}
</style>
