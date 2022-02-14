<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3
        class="text-center text-4xl font-bold text-primary-color"
      >
        Canjica de milho verde
      </h3>
      <div class="container-icones">
          <div class="icone">
            <img
              src="../../../../assets/img/icones-receitas/tempo-de-preparo.png"
            />
            <span>50min</span>
          </div>

          <div class="icone">
            <img src="../../../../assets/img/icones-receitas/porcoes.png" />
            <span>7 porções de 140g</span>
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
            <iframe
              class="border-white border-4 shadow rounded-lg"
              src="https://www.youtube.com/embed/1oIC01tSt60"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div class="bg-white px-8 py-6 rounded-lg shadow">
          <h3 class="text-primary-color text-2xl font-semibold mb-5">
            Equipamento e utensílios
          </h3>

          <ul class="lista-check mb-0">
            <li>Fogão</li>
            <li>Balança ou xicara medidora</li>
            <li>Peneira</li>
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
          <li>6 unidades de espigas de milho verde (290g)</li>
          <li>1 xícara de açúcar(200g)</li>
          <li>3 ½ xícara de leite integral(720g)</li>
          <li>¼ de xícara de margarina ou manteiga (50g)</li>
          <li>Canela em pó a gosto</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Modo de preparo
        </h3>

        <p>
          Higienize as espigas de milho tirando todo o estigma após lavar bem com auxílio de uma faca corte todos os grãos do sabugo. Feito isso leve o milho junto com o leite ao liquidificador, depois de bem triturado passe a mistura pela peneira, descarte o bagaço, leve ao fogo baixo numa panela juntamente com o açúcar e margarina.
        </p>

        <p>
          Mexa bem para que não grude no fundo da panela, sua canjica estará pronta quando estiver bem consistente, após retirar da panela coloque em uma assadeira untada com margarina, finalize com canela a gosto. 
          
          <p>
            Sirva frio!
          </p>
      </div>

      <BoxTips :icone="'bookmark'">
        <template v-slot:titulo>Lembrete</template>
        <template v-slot:conteudo>
          Para que a canjica não fique com gosto amargo tenha cuidado ao cortar as espigas. Não corte rente ao sabugo.
        </template>
      </BoxTips>

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
import BoxTips from "@/components/BoxTips.vue";

export default {
  title: "Aula 03 - Receitas: Mugunzá Doce",
  components: { BoxTips },
  data() {
    return {};
  },
  created() {
    this.$store.commit('COMPLETAR_RECEITA_3')
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
  padding: 12px;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
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
  height: 18px;
  margin-right: 5px;
}

</style>
