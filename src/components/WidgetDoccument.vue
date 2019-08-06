<template>
  <div class="company-document">
    <div class="area1">
      <i v-if="!vencido" class=" icon-isValid fa fa-compress"></i>
      <i v-if="vencido" class=" icon-isNotValid fa fa-compress"></i>
      <span v-if="!vencido" class="document-isValid">VÁLIDO</span>
      <span v-if="vencido" class="document-isNotValid">INVÁLIDO</span>
    </div>
    <div class="area2">
        <span class="contract-name">{{nome}}</span>
    </div>
    <span class="created-at">Criado em {{new Date(criadoEm).toLocaleString().slice(0, 10)}}</span>
  </div>
</template>

<script>
export default {
  name: 'WidgetDoccument',
  props: ['nome', 'criadoEm', 'vencido']
}
</script>

<style>

.company-document {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 200px;
    height: 125px;
    background-color: #fff;
    margin: 15px;
    padding: 15px;
}
.icon-isNotValid {
    color: #f3ca42;
}
.icon-isValid {
    color: #04f183;
}

.document-isValid {
    display: inline-flex;
    padding: 5px;
    background-color: #04f183;
    color: #fff;
    font-weight: 800;
    font-size: 7pt;
}

.document-isNotValid {
    display: inline-flex;
    padding: 5px;
    background-color: #f3ca42;
    color: #fff;
    font-weight: 800;
    font-size: 7pt;
}

.contract-name {
    color: #555;
    font-weight: 500;
    font-size: 14pt;
}

.created-at {
    color: #888;
    font-size: 10pt;
}

</style>
