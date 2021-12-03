<template>
  <div id="lista-aulas">
    <CardAula
      v-for="aula in $store.state.aulas"
      :key="aula.id"
      :aula="aula"
      />
  </div>
</template>

<script>
import CardAula from '@/components/cards-aulas/CardAula.vue'

export default {
  components: { CardAula },

};
</script>

<style>


</style>