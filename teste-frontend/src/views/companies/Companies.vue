<template>
    <div>
        <Header />
        <router-view />
    </div>  
</template>

<script>
import Header from '../../components/templates/Header.vue' 
export default {
    name: 'Companies',
    components: ['Header']
}
</script>

<style>

</style>