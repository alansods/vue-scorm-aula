<template>
  <div id="apresentação">
    <div
      id="container-bg-video"
      class="
        img-fundo
        h-bg-apresentacao
        px-3
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
          h-bg-apresentacao
          mx-auto
          flex flex-col
          justify-center
          items-center
          pt-5
        "
      >
        <div id="titulo-curso" class="xl:w-2/3 2xl:w-auto">
          <h1
            class="
              text-center text-3xl
              xl:text-4xl
              2xl:text-5xl
              font-bold
              shadow-sm
              2xl:leading-tight
            "
          >
            {{ $store.state.nomeDoCurso }}
          </h1>
        </div>

        <div
          id="container-video-apresentacao"
          class="w-full md:w-2/4 2xl:w-3/5 mx-auto my-12"
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

        <div
          @click="goto('div1')"
          id="seta-descer"
          class="text-center cursor-pointer"
        >
          <v-icon scale="2" name="chevron-down" class="animate-bounce" />
        </div>
      </div>
    </div>

    <div
      id="corpo"
      class="w-full px-7 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <div id="container-descricao-curso text-center mt-5 mx-auto">
        <div ref="div1">
          <h2 class="text-center text-3xl font-bold text-primary-color my-5">
            Apresentação
          </h2>
        </div>
        <p class="mt-5 text-2xl">
          Olá <NomeAluno />!
        </p>

        <p class="mt-5">
          Boas vindas ao nosso curso, nele você desenvolverá habilidades e conhecimentos para a produção de doces regionais que vai desde canjicas, brigadeiro, o delicioso pé de moleque e munguzá entre outras receitas, seguindo as boas práticas na manipulação de alimentos, além de conhecer os utensílios que serão utilizados.
        </p>
        <p>
          Então vem com a gente!
        </p>
      </div>

      

      <div id="container-cards-aulas" class="mt-16">
        <ListaAulas />
      </div>
    </div>
  </div>
</template>

<script>
import ListaAulas from "@/components/cards-aulas/ListaAulas.vue";
export default {
  title: "Doces Regionais",
  components: { ListaAulas },
  methods: {
    goto(refName) {
      let element = this.$refs[refName];
      let top = element.offsetTop - 80;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    },
  },
  created() {
    //document.title = "NR - 10 Segurança em Instalações e Serviços em Eletricidade"
    this.$store.commit("ESTA_NA_AULA_APRESENTACAO", true)
    this.$store.commit("ESTA_NA_AULA_1", false)
    this.$store.commit("SALVAR_LOCAL_STORAGE");
  }
};
</script>

<style scoped>
.img-fundo {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(../assets/img/padrao/bg-apresentacao-2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

</style>