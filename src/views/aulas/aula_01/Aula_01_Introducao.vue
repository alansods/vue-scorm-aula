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
        class="w-full xl:max-w-screen-lg h-1/4 mx-auto flex items-center pt-5"
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
        v-for="topico in $store.state.topicosAula_01"
        :key="topico.id"
        :topico="topico"

        id="container-principal"
        class="flex justify-center items-center bg-white rounded-lg shadow my-7"
      >
        <div
          id="container-left"
          class="
            bg-primary-color
            w-20
            text-center
            py-5
            text-white
            font-bold
            text-2xl
            rounded-l-lg
          "
        >
          {{ topico.numeroTopico }}
        </div>

        <div id="container-middle" class="flex-1 pl-5">
          <div class="font-bold text-xl">Tópico {{ topico.numeroTopico }}</div>
          <div>{{ topico.nome }}</div>
        </div>

        <div id="container-right" class="pr-5 text-primary-color">
          <v-icon scale="2" name="sign-in-alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
