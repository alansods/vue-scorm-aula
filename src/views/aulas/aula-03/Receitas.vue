<template>
  <div id="receitas">
    <p
      class="pb-10 block w-2/3 md:w-full text-center text-gray-400 font-light"
      style="margin: 0 auto !important"
    >
      Assista todas as receitas para completar essa aula.
    </p>

    <div class="container-receitas">
      <div
        class="receita-item shadow"
        v-for="receita in $store.state.receitas"
        :key="receita.id"
      >
        <div v-if="receita.skeleton" class="skeleton"></div>
        <div
          class="flex flex-col" :class="{opacidade: receita.skeleton}"
          @click="$router.push({ path: receita.path })"
        >
        
          <div class="container-img">
            <img
              @load="receita.skeleton = false"
              :src="require(`@/assets/img/receitas/${receita.imagem}`)"
            />
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

            <div class="icone" v-if="receita.finalizada">
              <img src="../../../assets/img/padrao/check.svg" />
            </div>
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
    };
  },
  methods: {

  },
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
  flex: 1 1 300px;
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
  height: 200px;
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
  border-top: 1px solid #ccc;
}

.container-icones {
  display: flex;
  gap: 10px;
  justify-content: start;
  margin-left: 15px;
  padding: 20px 0;
}

.icone {
  display: flex;
  margin: 0 2px;
  flex: 1 0 auto;
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
  .container-icones {
    justify-content: space-evenly;
    margin: 0 auto;
  }
  h2 {
    text-align: center;
  }
}

.skeleton {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #ccc 0px, #eee 50%, #ccc 100%);
  background-color: #eee;
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;
}

@keyframes skeleton {
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
}

.opacidade {
  opacity: 0;
}
</style>
