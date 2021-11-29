<template>
  <div id="lista-aulas">
    <CardAula
      v-for="card in $store.state.cards"
      :key="card.id"
      :card="card"
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