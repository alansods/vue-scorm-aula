<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3 class="text-center text-4xl font-bold text-primary-color">
        Canjica de milho em conserva
      </h3>
      <div class="container-icones">
        <div class="icone">
          <img
            src="../../../../assets/img/icones-receitas/tempo-de-preparo.png"
          />
          <span>40min</span>
        </div>

        <div class="icone">
          <img src="../../../../assets/img/icones-receitas/porcoes.png" />
          <span>7 porções de 100g</span>
        </div>

        <div class="icone">
          <img src="../../../../assets/img/icones-receitas/dificuldade.png" />
          <span>fácil</span>
        </div>
      </div>
      <hr class="border-t-1 border-gray-300 my-5" />
      <div class="md:grid md:grid-cols-2 flex flex-col gap-5 mt-10">
        <div class="rounded-lg">
          <div id="video-apresentacao" class="aspect-w-16 aspect-h-9">
            <youtube
              video-id="b0BuHBpzhdI"
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
            <li>Liquidificador</li>
            <li>Peneira</li>
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
          <li>300 ml de leite integral (300g)</li>
          <li>200 ml de leite de coco (200g)</li>
          <li>¾ de xícara de leite condensado (250g)</li>
          <li>1 colher de sopa de amido de milho (15g)</li>
          <li>2 latas de milho em conserva</li>
          <li>Canela em pó a gosto</li>
          <li>½ xícara de queijo coalho (50g)</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Modo de preparo
        </h3>

        <ol class="lista-numerica">
          <li>
            No liquidificador, coloque as duas latas de milho escorrido, o leite
            de coco, e o leite integral bata até ficar triturado. Em seguida,
            peneire essa mistura e descarte o bagaço.
          </li>

          <li>
            Em uma panela coloque a mistura, acrescente o leite condensado, o
            amido, o pau de canela e o queijo, antes de levar ao fogo mexa bem
            para dissolver o amido na mistura logo após com fogo baixo mexa de
            vez em quando com cuidado para não grudar.
          </li>

          <li>
            Após ganhar consistência, desligue o fogo e coloque a canjica em um
            bowl para esfriar finalize com canela em pó a gosto.
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
  title: "Aula 03 - Receitas: Canjica de milho em conserva",
  components: {},
  data() {
    return {};
  },
  methods: {
    ended() {
      this.$store.commit("COMPLETAR_RECEITA_4");
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
