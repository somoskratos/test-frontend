<template>
      <div class="k-w-company" :style="area">
        <img class="k-c-logo" :src="logo" alt="logo" >
        <router-link class="k-r-link" :to="url">
        <p class="k-c-p">{{nomeFantasia}}</p>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'WidgetCompany',
  props: ['logo', 'nomeFantasia', 'id', 'area'],
  data: () => {
    return {
      url: ''
    }
  },
  mounted () {
    this.url = { name: 'DashCompany', params: { id: this.id } }
  }
}

</script>

<style>
  .k-r-link {
      text-decoration: none;
      text-decoration-line: none;
  }
  .k-w-company {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      box-shadow: 2px 2px 0px 0px #bbb;
      background-color: #fff;
      border-radius: 2%;
  }

  .k-c-logo {
    border-radius: 50%;
    width: 90px;
    height: 90px;
  }

  .k-c-p {
    color: #444;
  }
</style>
