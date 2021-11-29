import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nomeDoCurso: "NR - 10 Segurança em Instalações e Serviços em Eletricidade",
    user: "Lobo",
    cards: [
      {
        id: "1",
        numeroAula: "01",
        nomeAula: "Introdução",
        descricaoAula: "fdfdfdfdfdfdfdfd",
        img: "figura1.jpg"
      },
      {
        id: "2",
        numeroAula: "02",
        nomeAula: "Energia Elétrica",
        descricaoAula: "aaeeeaaeaeaea",
        img: "figura1.jpg"
      },
      {
        id: "3",
        numeroAula: "03",
        nomeAula: "Produtos de Energia",
        descricaoAula: "gfhththgrrtrtr",
        img: "figura1.jpg"
      },
    ],
  },
  mutations: {

  }
})
