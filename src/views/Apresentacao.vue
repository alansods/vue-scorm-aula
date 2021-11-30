<template>
  <div id="apresentação">
    <div id="container-bg-video" class="bg-video-apresentacao h-screen text-white">
      <div id="container-video" class="sm:w-full xl:max-w-screen-lg mx-auto py-10">
        <div id="titulo-curso">
          <h1 class="text-center text-4xl font-bold">
            {{ $store.state.nomeDoCurso }}
          </h1>
        </div>
        <div id="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/93wkCvje2ro"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
        <div id="seta-descer">icone seta para baixo animada</div>
      </div>
    </div>

    <div id="corpo" class="sm:w-full xl:max-w-screen-lg mx-auto mt-16">
      <div id="container-descricao-curso">
        <div>
          <h2 class="text-center text-3xl font-bold text-primary-color">Apresentação</h2>
        </div>
          <p class="text-center mt-5 mb-16">
            Seja bem-vindo ao Curso Básico de Segurança em Instalações e
            Serviços em Eletricidade – NR 10, modalidade à distância – EAD. Este
            curso inicia uma nova etapa de formação profissional oferecida pelo
            SENAI para a sociedade a qual pertence.
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
  components: { ListaAulas },
};
</script>
