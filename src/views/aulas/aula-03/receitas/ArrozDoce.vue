<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <h3
        class="text-left md:text-center text-3xl font-bold text-primary-color"
      >
        Arroz Doce
      </h3>
      <hr class="border-t-1 border-gray-300 my-8" />
      <div class="md:grid md:grid-cols-2 flex flex-col gap-5 mt-10">
        <div class="rounded-lg">
          <div id="video-apresentacao" class="aspect-w-16 aspect-h-9">
            <iframe
              class="border-white border-4 shadow rounded-lg"
              src="https://www.youtube.com/embed/90_JQeEp-1c"
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
            <li>fogão</li>
            <li>balança xicara medidora</li>
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

        <ul class="lista-check grid grid-cols-2 mb-0">
          <li style="order: 1">1 xícara de arroz (175g)</li>
          <li style="order: 3">1/3 de xícara de açúcar (65g)</li>
          <li style="order: 5">3 cravos da índia</li>
          <li style="order: 7">1 canela em pau</li>
          <li style="order: 9">2 xícaras de água (420g)</li>
          <li style="order: 2">3 xícaras de leite (648g)</li>
          <li style="order: 4">½ caixa de leite condensado(198g)</li>
          <li style="order: 6">1 xícara de creme de leite (200g)</li>
          <li style="order: 8">Casca de 1 laranja</li>
          <li style="order: 10">Sal a gosto</li>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="text-primary-color text-2xl font-semibold mb-5">
          Modo de preparo
        </h3>

        <p>
          Em uma panela de fundo grosso adicione todos os ingredientes exceto o
          leite condensado e creme de leite e leve ao fogo mexendo de vez em
          quando para que não grude no fundo da panela.
        </p>

        <p>
          Após 20 minutos, acrescente o leite condensado e deixe cozinhar por
          mais 5 min, e para finalizar acrescente o creme de leite, mexa bem. O
          arroz deve ficar meio líquido, não tem problema pois depois de esfriar
          ele ganha consistência.
        </p>

        <p>
          Após esta pronto coloque o arroz doce em um bowl, para evitar que crie
          uma crosta no seu arroz cubra com plástico filme tocando diretamente
          no seu doce, você pode deixar esfriando em temperatura ambiente ou
          levar para geladeira por 3hs.
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
          md:w-48
          rounded-lg
          text-white
          flex
          justify-center
          items-center
        "
      >
        <v-icon class="icone-setas mr-3" name="arrow-left" />
        Voltar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  title: "Aula 03 - Receitas: Arroz Doce",
  components: {},
  data() {
    return {};
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
.container-receitas {
  display: flex;
  gap: 30px 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.receita-item {
  background: #fff;
  border-radius: 10px;
  flex-grow: 1;
  position: relative;
  cursor: pointer;
  transition: transform 150ms ease-in-out;
}

.receita-item:hover {
  transform: scale(1.05);
}

.container-img {
  background: rgba(0, 0, 0, 0.329);
  width: 100%;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.container-img img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.container-img h2 {
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
}

.bg-titulo-receita {
  background: rgba(0, 0, 0, 0.473);
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.container-icones {
  display: flex;
  gap: 10px;
  padding: 12px;
  justify-content: space-around;
}

.icone {
  display: flex;
  justify-content: center;
}

.icone span {
  font-size: 0.8rem;
}

.icone img {
  width: auto;
  height: 17px;
  margin-right: 5px;
}

@media (max-width: 600px) {
  .container-receitas {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
    flex-wrap: nowrap;
    justify-content: center;
  }

  .receita-item {
    width: 100%;
  }
}
</style>
