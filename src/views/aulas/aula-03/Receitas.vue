<template>
  <div class="container-receitas">
        <div
          class="receita-item shadow"
          v-for="receita in receitas"
          :key="receita.id"
        >
        <router-link :to="receita.path">
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
              <span>{{ receita.porcoes }}</span>
            </div>

            <div class="icone">
              <img src="../../../assets/img/icones-receitas/dificuldade.png" />
              <span>{{ receita.dificuldade }}</span>
            </div>
          </div>
          </router-link>
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
          nome: "Arroz Doce",
          imagem: "receita1.jpg",
          tempo: "25min",
          porcoes: "2 porções",
          calorias: "300kcal",
          dificuldade: "fácil",
          path: "aula-03/arroz-doce",
        },
        {
          id: 2,
          nome: "Mungunzá doce",
          imagem: "receita2.jpg",
          tempo: "10min",
          porcoes: "5 porções",
          calorias: "100kcal",
          dificuldade: "médio",
          path: "aula-03/arroz-doce",
        },
        {
          id: 3,
          nome: "Canjica de milho verde",
          imagem: "receita3.jpg",
          tempo: "45min",
          porcoes: "3 porções",
          calorias: "200kcal",
          dificuldade: "fácil",
          path: "aula-03/arroz-doce",
        },
        {
          id: 4,
          nome: "Canjica de milho em conserva",
          imagem: "receita3.jpg",
          tempo: "45min",
          porcoes: "3 porções",
          calorias: "200kcal",
          dificuldade: "fácil",
          path: "aula-03/arroz-doce",
        },
        {
          id: 5,
          nome: "Cocada baiana de colher",
          imagem: "receita3.jpg",
          tempo: "45min",
          porcoes: "3 porções",
          calorias: "200kcal",
          dificuldade: "fácil",
          path: "aula-03/arroz-doce",
        },
        {
          id: 6,
          nome: "Pé de moleque",
          imagem: "receita3.jpg",
          tempo: "45min",
          porcoes: "3 porções",
          calorias: "200kcal",
          dificuldade: "fácil",
          path: "aula-03/arroz-doce",
        },
        {
          id: 7,
          nome: "Brigadeiro de milho",
          imagem: "receita3.jpg",
          tempo: "45min",
          porcoes: "3 porções",
          calorias: "200kcal",
          dificuldade: "fácil",
          path: "aula-03/arroz-doce",
        },
        {
          id: 8,
          nome: "Queijadinha",
          imagem: "receita3.jpg",
          tempo: "45min",
          porcoes: "3 porções",
          calorias: "200kcal",
          dificuldade: "fácil",
          path: "aula-03/arroz-doce",
        },
      ],
    };
  },
}
</script>

<style scoped>
.container-receitas {
  display: flex;
  gap: 30px 25px;
  flex-wrap: wrap;
  justify-content: center;
}

.receita-item {
  background: #fff;
  border-radius: 10px;
  flex-grow: 1;
  max-width: 320px;
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
  justify-content: space-evenly;
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
    margin: 0 auto;
  }
}
</style>