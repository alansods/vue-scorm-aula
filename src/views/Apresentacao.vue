<template>
  <div id="apresentação">
    <div id="container-video" class="">
      <div id="titulo-curso">
        <h1>{{ $store.state.nomeDoCurso }}</h1>
      </div>
      <div id="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/93wkCvje2ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>
      <div id="seta-descer">icone seta para baixo animada</div>
    </div>

    <div id="container-descricao-curso">
      <div>
        <h1>Apresentação</h1>
      </div>
      <div>
        <p>
          Seja bem-vindo ao Curso Básico de Segurança em Instalações e Serviços em Eletricidade – NR 10, modalidade à distância – EAD. Este curso inicia uma nova etapa de formação profissional oferecida pelo SENAI para a sociedade a qual pertence.
        </p>
      </div>
    </div>

    <div id="container-cards-aulas">
      <ListaAulas />
    </div>
  </div>
</template>

<script>
import ListaAulas from '@/components/cards-aulas/ListaAulas.vue'
export default {
  components: { ListaAulas },

};

</script>
