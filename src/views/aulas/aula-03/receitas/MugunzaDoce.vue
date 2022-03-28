<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3
        class="text-center text-4xl font-bold text-primary-color"
      >
        Mugunzá Doce
      </h3>
      <div class="container-icones">
          <div class="icone">
            <img
              src="../../../../assets/img/icones-receitas/tempo-de-preparo.png"
            />
            <span>55min</span>
          </div>

          <div class="icone">
            <img src="../../../../assets/img/icones-receitas/porcoes.png" />
            <span>12 porções de 150g</span>
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
            <youtube video-id="zc2l49hUSlE" class="border-white border-4 shadow-xl rounded-sm"  @ended="ended"/>
          </div>
        </div>

        <div class="bg-white px-8 py-6 rounded-lg shadow">
          <h3 class="text-primary-color text-2xl font-semibold mb-5">
            Equipamento e utensílios
          </h3>

          <ul class="lista-check mb-0">
            <li>Fogão</li>
            <li>Balança ou xicara medidora</li>
            <li>Panela</li>
            <li>Espátula</li>
          </ul>
        </div>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Ingredientes
        </h3>

        <ul class="lista-check md:grid md:grid-cols-2 mb-0">
          <li>500g de milho para mungunzá ou canjica</li>
          <li>50g de coco ralado sem açúcar (fresco ou seco)</li>
          <li>1 xícara de açúcar (175g)</li>
          <li>200ml de leite de coco (200g)</li>
          <li>1 caixa de leite condensado(395g)</li>
          <li>1 xícara de creme de leite (200g)</li>
          <li>250 ml de leite integral</li>
          <li>1 pau de canela</li>
          <li>4 unid cravos</li>
          <li>Canela em pó a gosto</li>
          <li>Sal a gosto</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Modo de preparo
        </h3>

        <ol class="lista-numerica">
        <li>
          Numa vasilha coloque o milho e cubra com água e deixe descansar por no mínimo 12hs.
        </li>

        <li>
          Após esse período coloque o milho na panela de pressão com 2 litros de água, canela em pau, os cravos e sal a gosto, deixe cozinhar por 50 min.
        </li>

        <li>
          Depois do cozimento derrame a água e acrescente na panela o leite integral, leite de coco, açúcar e o coco ralado, mexendo de vez em quando para não grudar no fundo da panela, ficará pronto assim que engrossar, passe seu munguzá para uma vasilha, cubra com plástico filme rente ao doce.
        </li>

        <li>
          Você pode servir quente ou gelado, finalize com canela em pó ao gosto.
        </li>
        </ol>
      </div>

      <div class="bg-green-400 p-8 rounded-lg shadow my-5 text-white">
        <div class="flex items-center font-semibold text-2xl text-white mb-5">
          <v-icon name="bookmark" class="mr-2 fill-current" scale="1.8" />
          <h3>Lembrete</h3>
        </div>
        <div>
          <p>
            O milho é deixado descansado de um dia para outro para que ele cozinhe mais rápido. Se colocar na mesma hora para cozinhar o processo será mais demorado.
          </p>
        </div>
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
  title: "Aula 03 - Receitas: Mugunzá doce",
  components: {  },
  data() {
    return {};
  },
    methods:{
    ended(){
      this.$store.commit('COMPLETAR_RECEITA_2')
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
