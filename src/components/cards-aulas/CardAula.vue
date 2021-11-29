<template>
  <div id="card-aula">
    <div id="card-img">
      <img :src="require(`@/assets/img/${card.img}`)" />
    </div>
    <div id="card-content">
      <div>Aula {{ card.numeroAula }}</div>
      <div>{{ card.nomeAula }}</div>
      <div>{{ card.descricaoAula }}</div>
      <button>Começar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style></style>
