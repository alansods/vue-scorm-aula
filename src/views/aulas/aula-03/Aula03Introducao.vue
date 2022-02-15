<template>
  <div id="aula-01">
    <div
      id="container-bg-video"
      class="
        img-bg-aula
        bg-cover
        h-1/4
        px-5
        pb-10
        md:py-8
        xl:px-0
        mx-auto
        text-white
      "
    >
      <div
        id="container-all-content-bg-video"
        class="
          w-full
          xl:max-w-screen-lg
          mx-auto
          flex flex-col
          xl:flex-row xl:items-center
          pt-12
          xl:pt-7 xl:pb-5
        "
      >
        <div id="titulo-curso" class="xl:w-3/4 text-left">
          <div class="flex items-center">
            <v-icon
              name="book-open"
              class="mr-2 text-xl xl:text-xl fill-current"
            />
            <h2 class="text-xl xl:text-xl font-light shadow-sm">
              Aula {{ $store.state.aulas[2].numeroAula }}
            </h2>
          </div>
          <h3 class="text-3xl xl:text-4xl font-bold shadow-sm mb-4">
            {{ $store.state.aulas[2].nomeAula }}
          </h3>
          <p class="mt-2 font-light" style="width 80%">
            {{ $store.state.aulas[2].descricaoAula }}
          </p>
        </div>

        <!-- <div
          id="container-video-apresentacao"
          class="w-full md:w-2/4 2xl:w-2/5 mx-auto my-12 xl:my-4"
        >
          <div id="video-apresentacao" class="aspect-w-16 aspect-h-9">
            <iframe
              class="border-white border-4 shadow-xl rounded-sm"
              src="https://www.youtube.com/embed/93wkCvje2ro"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div> -->
      </div>
    </div>

    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <transition mode="out-in">
        <router-view />
      </transition>

      <div class="flex justify-around mt-16">
        <router-link to="/aula-02">
          <NavButton :icone="'arrow-left'"></NavButton>
        </router-link>

        <button
          class="
            bg-gray-300
            py-3
            px-4
            rounded-lg
            text-white
            cursor-not-allowed
          "
        >
          <v-icon scale="1.5" class="icone-setas" name="arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton";

export default {
  title: "Aula 03 - Receitas",
  components: { NavButton },

  created() {
    this.$store.commit("ESTA_NA_AULA_APRESENTACAO", false);
    this.$store.commit("ESTA_NA_AULA_1", false);
    this.$store.commit("ESTA_NA_AULA_2", false);
    this.$store.commit("ESTA_NA_AULA_3", true);
    this.$store.commit("SALVAR_LOCAL_STORAGE");
  },
};
</script>

<style scoped></style>
