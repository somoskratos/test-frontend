<template>
    <b-card class="d-flex">
        <div v-if="valid" class="col-12 d-inline-flex valid p-0 justify-content-around">
            <i class="fas fa-stamp"></i>
            <span>VÁLIDO</span>
        </div>
        <div v-else class="col-12 d-inline-flex invalid p-0 justify-content-around">
            <i class="fas fa-stamp"></i>
            <span>INVÁLIDO</span>
        </div>
        <span class="text-dark">{{title}}</span>
        <span class="text-muted">Criado em: {{day}}/{{month}}/{{year}}</span>
    </b-card>
</template>

<script>
export default {
    name: 'DocumentWidget',
    props: ['valid', 'title', 'createdAt']
}
</script>

<style scoped>

</style>
