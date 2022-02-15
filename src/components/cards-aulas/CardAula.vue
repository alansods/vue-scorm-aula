<template>
  <div
    id="card-aula"
    class="xl:flex h-auto shadow rounded-lg bg-white my-10"
  >
      <img
        :src="require(`@/assets/img/${aula.img}`)"
        class="
          h-60
          w-full
          md:h-auto
          md:w-80
          object-cover
          rounded-t-lg rounded-b-none
          xl:rounded-tr-none xl:rounded-bl-lg
        "
      />

    <div id="card-content" class="py-7 px-6 md:px-9 text-dark-color">
      <div class="flex items-center">
        <v-icon name="book-open" class="mr-2 text-xl xl:text-xl fill-current" />
        <div class="font-regular text-lg">Aula {{ aula.numeroAula }}</div>
      </div>
      <div class="text-2xl font-bold">{{ aula.nomeAula }}</div>
      <hr style="opacity: 15%; margin: 15px 0; border-top:1px solid #333">
      <div class="mt-2 descricao-aula">{{ aula.descricaoAula }}</div>
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
            xl:transform
            xl:hover:-translate-y-1
            xl:transition-all
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

/* .descricao-aula{
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
 */
</style>
