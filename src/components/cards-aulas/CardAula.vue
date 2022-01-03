<template>
  <div
    id="card-aula"
    class="xl:flex xl:items-center shadow rounded-lg bg-white my-6"
  >
    <div id="card-img">
      <img
        :src="require(`@/assets/img/${aula.img}`)"
        class="
          w-full
          h-52
          xl:h-full
          object-cover
          rounded-t-lg rounded-b-none
          xl:rounded-tr-none xl:rounded-bl-lg
        "
      />
    </div>
    <div id="card-content" class="py-5 px-8 text-dark-color">
      <div class="font-bold text-xl">Aula {{ aula.numeroAula }}</div>
      <div class="text-lg font-medium">{{ aula.nomeAula }}</div>
      <div class="text-sm">{{ aula.descricaoAula }}</div>
      <router-link :to="aula.link">
      <button
        class="
          bg-primary-color
          w-full
          xl:w-auto
          text-sm
          px-5
          py-2
          mt-5
          text-white
          rounded-full
          shadow
          xl:hover:bg-primary-color-hover
          transition-all
        "
      >
        Começar
      </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["aula"],
};
</script>

<style></style>
