<template>
  <div class="container-receitas">
    <div
      class="receita-item shadow"
      v-for="receita in receitas"
      :key="receita.id"
    >
      <div class="flex flex-col" @click="$router.push({ path: receita.path })">
        <div class="container-img">
          <img :src="require(`@/assets/img/receitas/${receita.imagem}`)" />
        </div>
        <h2>{{ receita.nome }}</h2>
        <hr />
        <div class="container-icones">
          <div class="icone">
            <img
              src="../../../assets/img/icones-receitas/tempo-de-preparo.png"
            />
            <span>{{ receita.tempo }}</span>
          </div>

          <div class="icone">
            <img src="../../../assets/img/icones-receitas/porcoes.png" />
            <span>{{ receita.porcoes }}</span>
          </div>

          <div class="icone">
            <img src="../../../assets/img/icones-receitas/dificuldade.png" />
            <span>{{ receita.dificuldade }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      receitas: [
        {
          id: 1,
          nome: "Arroz doce",
          imagem: "receita1.jpg",
          tempo: "25min",
          porcoes: "8 porções",
          calorias: "300kcal",
          dificuldade: "fácil",
          path: "/aula-03/arroz-doce",
        },
        {
          id: 2,
          nome: "Mungunzá doce",
          imagem: "receita2.jpg",
          tempo: "55min",
          porcoes: "12 porções",
          calorias: "100kcal",
          dificuldade: "fácil",
          path: "/aula-03/mugunza-doce",
        },
        {
          id: 3,
          nome: "Canjica de milho verde",
          imagem: "receita3.jpg",
          tempo: "50min",
          porcoes: "7 porções",
          calorias: "200kcal",
          dificuldade: "fácil",
          path: "/aula-03/canjica-de-milho-verde",
        },
        {
          id: 4,
          nome: "Canjica de milho em conserva",
          imagem: "receita3.jpg",
          tempo: "40min",
          porcoes: "7 porções",
          calorias: "200kcal",
          dificuldade: "fácil",
          path: "/aula-03/canjica-de-milho-em-conserva",
        },
        {
          id: 5,
          nome: "Cocada baiana de colher",
          imagem: "receita3.jpg",
          tempo: "30min",
          porcoes: "12 porções",
          calorias: "200kcal",
          dificuldade: "fácil",
          path: "/aula-03/cocada-baiana-de-colher",
        },
        {
          id: 6,
          nome: "Pé de moleque",
          imagem: "receita3.jpg",
          tempo: "35min",
          porcoes: "16 porções",
          calorias: "200kcal",
          dificuldade: "fácil",
          path: "/aula-03/pe-de-moleque",
        },
        {
          id: 7,
          nome: "Brigadeiro de milho",
          imagem: "receita3.jpg",
          tempo: "45min",
          porcoes: "85 porções",
          calorias: "200kcal",
          dificuldade: "médio",
          path: "/aula-03/brigadeiro-de-milho",
        },
        {
          id: 8,
          nome: "Queijadinha",
          imagem: "receita3.jpg",
          tempo: "60min",
          porcoes: "20 porções",
          calorias: "200kcal",
          dificuldade: "médio",
          path: "/aula-03/queijadinha",
        },
      ],
    };
  },
  methods: {

  }
};
</script>

<style scoped>
.container-receitas {
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
  justify-content: center;
}

.receita-item {
  background: #fff;
  border-radius: 10px;
  flex-grow: 1;
  max-width: 280px;
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
  height: auto;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

h2 {
  color: #333;
  width: 88%;
  font-weight: 500;
  font-size: 1.2rem;
  margin: 18px 0 15px 0;
  margin-left: 15px;
  line-height: 1.7rem;
}

hr {
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid #ccc ;
}

.container-icones {
  display: flex;
  gap: 10px;
  justify-content: s;
  margin-left: 15px;
  padding: 20px 0;
}

.icone {
  display: flex;
  justify-content: center;
  margin: 0 2px;
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
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .container-icones {
  justify-content: space-evenly;
  margin-left: 0;
}
}
</style>
