<template>
  <div id="card-aula" class="md:flex md:items-center shadow rounded-lg bg-white my-6">
    <div id="card-img">
      <img :src="require(`@/assets/img/${card.img}`)" class="w-full h-full object-cover md:rounded-bl-lg md:rounded-tl-lg"  />
    </div>
    <div id="card-content" class="py-5 px-8 text-dark-color">
      <div class="font-bold text-xl">Aula {{ card.numeroAula }}</div>
      <div class="text-lg font-medium">{{ card.nomeAula }}</div>
      <div class="text-sm">{{ card.descricaoAula }}</div>
      <button class="bg-primary-color text-sm px-5 py-2 mt-5 text-white rounded-full shadow md:hover:bg-primary-color-hover transition-all">Começar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style></style>
