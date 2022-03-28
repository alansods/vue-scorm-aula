<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        Brigadeiro de milho
      </h3>
      <div class="container-icones">
        <div class="icone">
          <img
            src="../../../../assets/img/icones-receitas/tempo-de-preparo.png"
          />
          <span>45min</span>
        </div>

        <div class="icone">
          <img src="../../../../assets/img/icones-receitas/porcoes.png" />
          <span>85 porções de 10g</span>
        </div>

        <div class="icone">
          <img src="../../../../assets/img/icones-receitas/dificuldade.png" />
          <span>médio</span>
        </div>
      </div>
      <hr class="border-t-1 border-gray-300 my-5" />
      <div class="md:grid md:grid-cols-2 flex flex-col gap-5 mt-10">
        <div class="rounded-lg">
          <div id="video-apresentacao" class="aspect-w-16 aspect-h-9">
            <youtube
              video-id="_GRiEcBLRwU"
              class="border-white border-4 shadow-xl rounded-sm"
              @ended="ended"
            />
          </div>
        </div>

        <div class="bg-white px-8 py-6 rounded-lg shadow">
          <h3 class="text-primary-color text-2xl font-semibold mb-5">
            Equipamento e utensílios
          </h3>

          <ul class="lista-check mb-0">
            <li>Fogão</li>
            <li>Liquidificador</li>
            <li>Panela</li>
            <li>Espátula</li>
            <li>Bowl</li>
          </ul>
        </div>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Ingredientes
        </h3>

        <ul class="lista-check md:grid md:grid-cols-2 mb-0">
          <li>⅓ de xícara de leite (80g)</li>
          <li>1 xícara creme de leite (220g)</li>
          <li>1 lata de milho em conserva</li>
          <li>1 xícara de leite condensado (300g)</li>
          <li>1 colher de chá de margarina (10g)</li>
          <li>2 ½ xícara de coco seco ralado (200g)</li>
          <li>1 colher de chá de amido de milho</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Modo de preparo
        </h3>

        <ol class="lista-numerica">
          <li>
            No liquidificador coloque o leite, o milho escorrido e creme de
            leite, deixe bater bem.
          </li>

          <li>
            Logo após passe essa mistura numa peneira,
            descarte o bagaço.
          </li>

          <li>
            Numa panela coloque essa mistura e leve em fogo médio junto com o
            leite condensado e a margarina, mexa sempre, estará pronto quando
            desgrudar do fundo da panela. 
          </li>

          <li>
            Depois passe para um bowl (não é
            necessário passar margarina pois o doce já tem bastante gordura),
            passe em um filme plástico e deixe em temperatura ambiente para
            esfriar, depois leve a geladeira e tire momentos antes de enrolar
            para que não fique “duros”.
          </li>

          <li>
            Em seguida molhando as mãos com água ou passando margarina modele os
            docinhos em 10g ou 15g. Em uma panela coloque o coco ralado e leve
            ao fogo para criar uma cor caramelo, não necessita acrescentar
            gordura, mexa sempre. 
          </li>

          <li>
            Após chegar a coloração desejada apague o fogo
            e transfira o coco para um bowl para que possa esfriar, depois de
            enrolar os docinhos envolva no coco.
          </li>
        </ol>
      </div>

      <button
        @click.prevent="$router.push('/aula-03')"
        class="
          mx-auto
          bg-primary-color
          xl:hover:bg-primary-color-hover
          xl:transform
          xl:hover:-translate-y-1
          xl:transition-all
          h-12
          w-full
          md:w-60
          rounded-lg
          text-white
          flex
          justify-center
          items-center
        "
      >
        <v-icon class="icone-setas mr-3" name="arrow-left" />
        Voltar para receitas
      </button>
    </div>
  </div>
</template>

<script>
export default {
  title: "Aula 03 - Receitas: Brigadeiro de Milho",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_7");
    },
  },
  created() {
    this.$store.commit("ESTA_NA_AULA_APRESENTACAO", false);
    this.$store.commit("ESTA_NA_AULA_1", false);
    this.$store.commit("ESTA_NA_AULA_2", false);
    this.$store.commit("ESTA_NA_AULA_3", true);
    this.$store.commit("SALVAR_LOCAL_STORAGE");
  },
};
</script>

<style scoped>
.container-icones {
  display: flex;
  gap: 10px;
  justify-content: center;
  max-width: 500px;
  margin: 12px auto;
}

.icone {
  display: flex;
  justify-content: center;
}

.icone span {
  font-size: 1rem;
}

.icone img {
  width: auto;
  height: 17px;
  margin-right: 5px;
}
</style>
