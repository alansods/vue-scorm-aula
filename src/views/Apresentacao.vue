<template>
  <div id="apresentação">
    <div
      id="container-bg-video"
      class="bg-video-apresentacao bg-cover h-bg-apresentacao px-3 xl:px-0 mx-auto text-white"
    >
      <div
        id="container-all-content-bg-video"
        class="w-full xl:max-w-screen-lg h-bg-apresentacao mx-auto flex flex-col justify-center xl:justify-evenly items-center pt-5"
      >
        <div id="titulo-curso" class="xl:w-2/3 2xl:w-auto">
          <h1 class="text-center text-3xl xl:text-4xl 2xl:text-5xl font-bold shadow-sm">
            {{ $store.state.nomeDoCurso }}
          </h1>
        </div>

        <div id="container-video-apresentacao" class="w-full md:w-2/4 2xl:w-3/4 mx-auto my-12 xl:my-4">
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

        <div @click="goto('div1')" id="seta-descer" class="text-center cursor-pointer">
          <v-icon scale="2" name="chevron-down" class="animate-bounce" />
        </div>
      </div>
    </div>

    <div id="corpo" class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16">
      <div id="container-descricao-curso">
        <div ref="div1">
          <h2 class="text-center text-3xl font-bold text-primary-color">
            Apresentação
          </h2>
        </div>
        <p class="text-center mt-5 mb-16 mx-auto">
          Seja bem-vindo ao Curso Básico de Segurança em Instalações e Serviços
          em Eletricidade – NR 10, modalidade à distância – EAD. Este curso
          inicia uma nova etapa de formação profissional oferecida pelo SENAI
          para a sociedade a qual pertence.
        </p>
      </div>

      <div id="container-cards-aulas">
        <ListaAulas />
      </div>
    </div>
  </div>
</template>

<script>
import ListaAulas from "@/components/cards-aulas/ListaAulas.vue";
export default {
  title: 'NR - 10 Segurança em Instalações e Serviços em Eletricidade',
  components: { ListaAulas },
  methods: {
    goto(refName) {
      let element = this.$refs[refName];
      let top = element.offsetTop - 100;

      window.scrollTo(0, top);
    }
  }
}
</script>
