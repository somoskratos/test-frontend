<template>
    <router-link class="widget mb-4 m-lg-3 p-3 p-lg-5 d-flex flex-column
     align-items-center justify-content-center text-center"
      :to="{name: 'company', params: {id: this.id}, props: {id: this.id}}">
        <img :src="imgSrc" :alt="title" style="border-radius: 50%; height: 120px; width: 120px;">        
        <span class="text-muted mt-5">{{title}}</span>   
    </router-link>       
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'CompanyWidget',
    props: ['title', 'id', 'imgSrc']

}
</script>

<style scoped>
.widget {
    text-decoration: none;
    background-color: #fff;
    border: 1px solid rgb(215, 215, 215);
}
</style>