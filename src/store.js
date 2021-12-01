import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuShow: false,
    nomeDoCurso: "NR - 10 Segurança em Instalações e Serviços em Eletricidade",
    user: "Lobo",
    cards: [
      {
        id: "1",
        numeroAula: "01",
        nomeAula: "Introdução",
        descricaoAula: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: "aula-1.jpg",
        link: "/aula1"
      },
      {
        id: "2",
        numeroAula: "02",
        nomeAula: "Energia Elétrica",
        descricaoAula: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: "aula-2.jpg",
        link: "/aula1"
      },
      {
        id: "3",
        numeroAula: "03",
        nomeAula: "Produtos de Energia",
        descricaoAula: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: "aula-3.jpg",
        link: "/aula1"
      },
    ],
    navbarItems: [
      {
        id: '1',
        nome: 'Apresentação',
        icone: 'home',
        link: '/'
      },
      {
        id: '2',
        nome: 'Aula 01',
        icone: 'book-open',
        link: '/aulas/Aula01'
      },
      {
        nome: 'Aula 02',
        icone: 'book-open',
        link: '/aulas/Aula02'
      },
      {
        id: '3',
        nome: 'Aula 03',
        icone: 'book-open',
        link: '/aulas/Aula03'
      },
      {
        id: '4',
        nome: 'Referências',
        icone: 'book',
        link: '/aulas/Referências'
      },
    ]
  },
  mutations: {

  }
})
