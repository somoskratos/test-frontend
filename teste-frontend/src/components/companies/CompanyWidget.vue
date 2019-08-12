<template>
    <div class="widget m-3 d-flex align-items-center justify-content-center text-center">
        <router-link :to="{name: 'company', params: {id: id}}">
            <img :src="imgSrc" :alt="title" style="border-radius: 50%; height: 75px;">
        </router-link>
        <span class="text-muted mt-5">{{title}}</span>   
    </div>       
</template>

<script>
export default {
    name: 'CompanyWidget',
    props: ['title', 'id', 'imgSrc']

}
</script>

<style scoped>
.widget .widget:hover {
    text-decoration: none;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid rgb(215, 215, 215);
}
</style>