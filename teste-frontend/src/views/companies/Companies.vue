<template>
    <div class="companies">
        <Header />
        <Content />
    </div>  
</template>

<script>
import Header from '@/components/templates/Header' 
import Content from '@/components/templates/Content' 
export default {
    name: 'Companies',
    components: { Header, Content }
}
</script>

<style scoped>

</style>
