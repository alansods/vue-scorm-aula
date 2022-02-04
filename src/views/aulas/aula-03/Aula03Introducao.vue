<template>
  <div id="aula-01">
    <div
      id="container-bg-video"
      class="
        bg-video-apresentacao bg-cover
        h-1/4
        px-4
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
          mx-auto
          flex flex-col
          xl:flex-row xl:items-center
          pt-12
          xl:pt-7 xl:pb-5
        "
      >
        <div id="titulo-curso" class="xl:w-3/4 text-left">
          <div class="flex items-center">
            <v-icon
              name="book-open"
              class="mr-2 text-xl xl:text-xl fill-current"
            />
            <h2 class="text-xl xl:text-xl font-light shadow-sm">
              Aula {{ $store.state.aulas[2].numeroAula }}
            </h2>
          </div>
          <h3 class="text-3xl xl:text-4xl font-bold shadow-sm mb-4">
            {{ $store.state.aulas[2].nomeAula }}
          </h3>
          <p class="mt-2 2xl:w-2/3 font-light">
            {{ $store.state.aulas[2].descricaoAula }}
          </p>
        </div>

        <div
          id="container-video-apresentacao"
          class="w-full md:w-2/4 2xl:w-2/5 mx-auto my-12 xl:my-4"
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
      </div>
    </div>

    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <div class="bg-white p-8 rounded-lg shadow my-5">
        Neste tópico iremos aprender receitas de doces tradicionais, tais como:
        canjica com milho verde e também milho em conserva, arroz doce
        saborizado com casca de laranja e especiarias, cocada baiana de colher
        entre outras receitas que você poderá aplicar de forma fácil e vender.
      </div>

      <div class="container-receitas">
        <div
          class="receita-item shadow"
          v-for="receita in receitas"
          :key="receita.id"
        >
          <div class="container-img">
            <img :src="require(`@/assets/img/receitas/${receita.imagem}`)" />
            <div class="bg-titulo-receita"></div>
            <h2>{{ receita.nome }}</h2>
          </div>

          <div class="container-icones">
            <div class="icone">
              <img
                src="../../../assets/img/icones-receitas/tempo-de-preparo.png"
              />
              <span>{{ receita.tempo }}</span>
            </div>

            <div class="icone">
              <img src="../../../assets/img/icones-receitas/porcoes.png" />
              <span>2 porções</span>
            </div>

            <div class="icone">
              <img src="../../../assets/img/icones-receitas/calorias.png" />
              <span>300Kcal</span>
            </div>

            <div class="icone">
              <img src="../../../assets/img/icones-receitas/dificuldade.png" />
              <span>Fácil</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-around mt-12">
        <router-link to="/aula-02">
          <NavButton :icone="'arrow-left'"></NavButton>
        </router-link>

        <button
          class="bg-gray-300 py-3 px-4 rounded-lg text-white cursor-not-allowed"
        >
          <v-icon class="icone-setas" name="arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton";

export default {
  title: "Aula 01",
  components: { NavButton },
  data() {
    return {
      receitas: [
        {
          id: 1,
          nome: "Arroz Doce",
          imagem: "receita1.jpg",
          tempo: "25min",
          porcoes: "2",
          calorias: "300kcal",
          dificuldade: "fácil",
        },
        {
          id: 2,
          nome: "Mungunzá doce",
          imagem: "receita2.jpg",
          tempo: "25min",
          porcoes: "2",
          calorias: "300kcal",
          dificuldade: "fácil",
        },
        {
          id: 3,
          nome: "Canjica de milho verde",
          imagem: "receita3.jpg",
          tempo: "25min",
          porcoes: "2",
          calorias: "300kcal",
          dificuldade: "fácil",
        },
      ],
    };
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
  gap: 30px 15px;
  flex-wrap: wrap;
}

.receita-item {
  background: #fff;
  border-radius: 10px;
  width: 330px;
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
  left: 15px;
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
  justify-content: flex-start;
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
  .receita-item {
    width: 100%;
  }
}
</style>
