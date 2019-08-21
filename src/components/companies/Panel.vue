<template>
    <div >
        <div
      class="logo d-flex justify-content-center align-items-center col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 border border-grey rounded-circle bg-white"
    >
      <img
        :src="getCompany.logo"
        alt
        class="rounded-circle border border-grey"
      />
    </div>
    <b-jumbotron bg-variant="white" border-variant="grey" class="panel col-12 col-lg-8 col-xl-9 p-4">
      <div class="name col-12 d-md-flex justify-content-between">
        <p class="text-dark col-12 col-md-6">{{getCompany.nomeFantasia}}</p>
        <b-badge
          pill
          class="d-none d-md-flex bg-success col-6 col-lg-5 justify-content-center align-items-center"
        >{{getCompany.tipo}}</b-badge>
      </div>
      <div class="col-12 d-flex p-3 row">
        <i class="text-muted fa fa-home"></i>
        <p class="text-muted col-10">{{getCompany.endereco}}</p>
      </div>
      <div class="col-11 d-block d-md-flex justify-content-between p-2 row">
        <div class="d-flex p-0 col-md-4 p-2">
          <i class="text-muted fas fa-id-card"></i>
          <p class="text-muted col-10">{{getCompany.cnpj}}</p>
        </div>
        <div class="d-flex p-0 col-md-3  p-2">
          <i class="text-muted fas fa-phone"></i>
          <p class="text-muted col-10">{{getCompany.phone}}</p>
        </div>
        <div class="d-flex p-0 col-md-4  p-2">
          <i class="text-muted fas fa-envelope"></i>
          <p class="text-muted col-10 d-flex flex-wrap">{{getCompany.email}}</p>
        </div>
      </div>
    </b-jumbotron>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Panel',
    computed: {
        ...mapGetters("company", ["getCompany"])
    }
};
</script>

<style lang="scss" scoped>

.logo {
  height: 250px;  
}

img {
  height: 75%;
  width: 75%;
}
@media (max-width: 991px) {
  .logo {
    position: absolute;
    z-index: 1;
    height: 200px;
  }
  img {    
    height: 75%;
    width: 85%;
  }    
  .panel {
    margin-top: 150px;
  }
  .name {
    margin-top: 50px;
  }
}
@media (min-width: 1200px) {
   img {    
    height: 75%;
    width: 95%;
  } 
  .logo {
    height: 210px;
  }
}
</style>
