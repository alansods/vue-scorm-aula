<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3
        class="text-center text-4xl font-bold text-primary-color"
      >
        Arroz Doce
      </h3>
      <div class="container-icones">
          <div class="icone">
            <img
              src="../../../../assets/img/icones-receitas/tempo-de-preparo.png"
            />
            <span>25min</span>
          </div>

          <div class="icone">
            <img src="../../../../assets/img/icones-receitas/porcoes.png" />
            <span>8 porções de 150g</span>
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
            <youtube video-id="AkbE2iqyh1U" class="border-white border-4 shadow-xl rounded-sm"  @ended="ended"/>
          </div>
        </div>

        <div class="bg-white px-8 py-6 rounded-lg shadow">
          <h3 class="text-primary-color text-2xl font-semibold mb-5">
            Equipamento e utensílios
          </h3>

          <ul class="lista-check mb-0">
            <li>fogão</li>
            <li>balança ou xicara medidora</li>
            <li>panela</li>
            <li>espátula</li>
            <li>bowl</li>
          </ul>
        </div>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Ingredientes
        </h3>

        <ul class="lista-check md:grid md:grid-cols-2 mb-0">
          <li>1 xícara de arroz (175g)</li>
          <li>1/3 de xícara de açúcar (65g)</li>
          <li>3 cravos da índia</li>
          <li>1 canela em pau</li>
          <li>2 xícaras de água (420g)</li>
          <li>3 xícaras de leite (648g)</li>
          <li>½ caixa de leite condensado(198g)</li>
          <li>1 xícara de creme de leite (200g)</li>
          <li>Casca de 1 laranja</li>
          <li>1 xícara de creme de leite (200g)</li>
          <li>Sal a gosto</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Modo de preparo
        </h3>

        <p>
          Em uma panela de fundo grosso adicione todos os ingredientes exceto o leite condensado e creme de leite e leve ao fogo mexendo de vez em quando para que não grude no fundo da panela.
        </p>

        <p>
           Após 20 minutos, acrescente o leite condensado e deixe cozinhar por mais 5 min, e para finalizar acrescente o creme de leite, mexa bem. O arroz deve ficar meio líquido, não tem problema pois depois de esfriar ele ganha consistência.
        </p>

        <p>
          Após esta pronto coloque o arroz doce em um bowl, para evitar que crie uma crosta no seu arroz cubra com plástico filme tocando diretamente no seu doce, você pode deixar esfriando em temperatura ambiente ou levar para geladeira por 3hs.
        </p>
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
  title: "Aula 03 - Receitas: Arroz doce",
  components: {},
  data() {
    return {};
  },
  methods:{
    ended(){
      this.$store.commit('COMPLETAR_RECEITA_1')
    }
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
