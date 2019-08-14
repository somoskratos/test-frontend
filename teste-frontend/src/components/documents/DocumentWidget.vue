<template>
    <div class="widget p-3 d-flex flex-wrap justify-content-start align-content-start bg-white mb-4">
        <div v-if="valid" class="col-12 col-md-8 d-flex valid justify-content-between mb-4">
            <i class="fas fa-stamp text-success"></i>
            <b-badge class="bg-success text-white">VÁLIDO</b-badge>
        </div>
        <div v-else class="col-12 col-md-8 d-flex invalid justify-content-between mb-4">
            <i class="fas fa-stamp text-warning"></i>
            <b-badge class="bg-warning text-white">INVÁLIDO</b-badge>
        </div>
        <div class="col-12 d-flex flex-column justify-content-start align-items-start">
            <span class="text-dark mb-3">{{title}}</span>
            <span class="text-muted ">
                Criado em: {{createdAt.match(/\d+-\d+-\d+/)[0]}}</span>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'DocumentWidget',
    props: ['valid', 'title', 'createdAt']
}
</script>

<style scoped>
.widget {
    border: 1px solid rgb(245, 245, 245);
    max-height: 150px;
}

b-badge {
    font-size: 1rem;
}


</style>
