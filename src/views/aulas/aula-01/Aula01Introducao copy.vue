<template>
  <div id="aula-01">
    <div
      id="container-bg-video"
      class="
        bg-video-apresentacao bg-cover
        h-1/4
        px-4
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
          <h2 class="text-3xl xl:text-4xl font-bold shadow-sm">
            Aula {{ $store.state.aulas[0].numeroAula }}
          </h2>
          <h3 class="text-2xl xl:text-3xl font-medium shadow-sm">
            {{ $store.state.aulas[0].nomeAula }}
          </h3>
          <p class="mt-2 2xl:w-2/3 font-light">
            {{ $store.state.aulas[0].descricaoAula }}
          </p>
        </div>

        <div
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
        </div>
      </div>
    </div>

    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <div id="container-principal">
        <Aula01ListaTopicos
          v-for="topico in $store.state.topicosAula_01"
          :key="topico.id"
          :topico="topico"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Aula01ListaTopicos from "@/components/Aula01ListaTopicos.vue";

export default {
  title: "Aula 01",
  components: { Aula01ListaTopicos },
  created() {
    this.$store.commit("ESTA_NA_AULA_APRESENTACAO", false);
    this.$store.commit("ESTA_NA_AULA_1", true);
    this.$store.commit("SALVAR_LOCAL_STORAGE");
  },
};
</script>

<style></style>
