<template>
  <div
    id="card-aula"
    class="xl:flex xl:items-center h-auto shadow rounded-lg bg-white my-10"
  >
    <div id="card-img" class="imagem-container">
      <img
        :src="require(`@/assets/img/${aula.img}`)"
        class="
          object-cover
          rounded-t-lg rounded-b-none
          xl:rounded-tr-none xl:rounded-bl-lg
        "
      />
    </div>
    <div id="card-content" class="py-7 px-6 md:px-9 text-dark-color">
      <div class="flex items-center">
        <v-icon name="book-open" class="mr-2 text-xl xl:text-xl fill-current" />
        <div class="font-regular text-lg">Aula {{ aula.numeroAula }}</div>
      </div>
      <div class="text-2xl font-bold">{{ aula.nomeAula }}</div>
      <div class="text-sm">{{ aula.descricaoAula }}</div>
      <router-link :to="aula.link">
        <button
          class="
            bg-primary-color
            w-full
            md:w-36
            h-12
            text-sm
            mt-10
            text-white
            rounded-lg
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

<style scoped>

  .imagem-container img{
    height: 200px;
    width: 100%;
  }

@media (min-width: 600px) {
  .imagem-container img{
    display: block;
    height: 100%;
    min-width: 200px;
  }
}
</style>
