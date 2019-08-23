<template>
    <div >
        <div class="logo d-flex justify-content-center align-items-center col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 rounded-circle"
        >
          <img
            :src="getCompany.logo"
            alt
            class="rounded-circle"
          />
        </div>
    <b-jumbotron class="panel col-12 col-lg-8 col-xl-9 p-4">
      <div class="name col-12 d-md-flex justify-content-between">
        <p class="text-name col-12 col-md-6">{{getCompany.nomeFantasia}}</p>
        <b-badge
          pill
          class="tag d-none d-md-flex col-5 col-lg-4 justify-content-center align-items-center"
        >{{getCompany.tipo}}</b-badge>
      </div>
      <div class="col-12 d-flex p-4 row">
        <i class="text fa fa-home"></i>
        <p class="text col-10">{{getCompany.endereco}}</p>
      </div>
      <div class="col-12 d-block d-md-flex p-0 flex-wrap">
        <div class="d-flex col-md-4 p-2">
          <i class="text fas fa-id-card"></i>
          <p class="text col-8">{{getCompany.cnpj}}</p>
        </div>
        <div class="d-flex col-md-4 p-2">
          <i class="text fas fa-phone"></i>
          <p class="text col-8">{{getCompany.phone}}</p>
        </div>
        <div class="d-flex col-md-4  p-2 flex-wrap">
          <i class="text fas fa-envelope"></i>
          <p class="text col-8">{{getCompany.email}}</p>
        </div>
      </div>
    </b-jumbotron>
    </div>    
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Panel",
  computed: {
    ...mapGetters("company", ["getCompany"])
  }
};
</script>

<style lang="scss" scoped>
.text-name {
  color: $text-primary;
  font-size: $font-xl;
}

.text {
  color: $text-secondary;
  font-size: $font-md;
}
.logo {
  height: $panel-logo-lg-h;
  background-color: $primary-background;
  border: $primary-border;
}
.panel {
  border: $primary-border;
  background-color: $primary-background;
}
.tag {
  background-color: $success;
}
img {
  border: $primary-border;
  height: $panel-img-scale-sm-h;
  width: $panel-img-scale-sm-w;
}
@media(max-width: $phones) {  
  .text-name {    
    display: flex;
    justify-content: center;
  }
}

@media (max-width: $tablets) {
  .logo {
    position: absolute;
    z-index: 1;
    height:  $panel-logo-sm-h;
  }
  img {
    height: $panel-img-scale-md-h;
    width: $panel-img-scale-md-w;
  }
  .panel {
    margin-top: $panel-md-mt;
  }
  .name {
    margin-top: $panel-name-md-mt;
  }
}
@media (min-width: $notebooks) {
  img {
    height: $panel-img-scale-lg-h;
    width: $panel-img-scale-lg-w;
  }
  .logo {
    height: $panel-logo-md-h;
  }
}
</style>
