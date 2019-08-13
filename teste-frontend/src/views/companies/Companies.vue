<template>
    <div class="companies">
        <Header />
        <router-view />
    </div>  
</template>

<script>
import Header from '@/components/templates/Header.vue' 
export default {
    name: 'Companies',
    components: { Header }
}
</script>

<style scoped>
*{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin: 0px;
}
.companies {
    background-color: rgb(247, 247, 247);
    height: 100%;
    width: 100%;
}

</style>