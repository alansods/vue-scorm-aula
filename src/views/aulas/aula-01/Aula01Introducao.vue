<template>
  <div id="aula-01">
    <div
      id="container-bg-video"
      class="
        bg-video-apresentacao bg-cover
        h-1/4
        px-3
        xl:px-0
        mx-auto
        text-white
      "
    >
      <div
        id="container-all-content-bg-video"
        class="w-full xl:max-w-screen-lg mx-auto flex items-center pt-7 pb-5"
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
      <div
        id="container-principal"
        
      >
        <Aula01ListaTopicos
          v-for="topico in $store.state.topicosAula_01"
          :key="topico.id"
          :topico="topico"
          
        />
      </div>
    </div>
    <FixedNav />
  </div>
</template>

<script>
import Aula01ListaTopicos from "@/components/Aula01ListaTopicos.vue";

export default {
  components: { Aula01ListaTopicos },
};
</script>

<style></style>
