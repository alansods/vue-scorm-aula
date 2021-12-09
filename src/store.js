import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalNome: true,
    menuShow: false,
    nomeDoCurso: "NR - 10 Segurança em Instalações e Serviços em Eletricidade",
    aluno: "",
    aulas: [
      {
        id: "1",
        numeroAula: "01",
        nomeAula: "Introdução ao Assunto",
        descricaoAula: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: "aula-1.jpg",
        link: "/aula-01"
      },
      {
        id: "2",
        numeroAula: "02",
        nomeAula: "Energia Elétrica",
        descricaoAula: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: "aula-2.jpg",
        link: "/Aula-02"
      },
      {
        id: "3",
        numeroAula: "03",
        nomeAula: "Produtos de Energia",
        descricaoAula: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: "aula-3.jpg",
        link: "/Aula-03"
      },
    ],
    topicosAula_01: [
      {
        id: '1',
        numeroTopico: '01',
        nome: 'Eletricidade na Vida',
        link: '/aula-01/topico-01'
      },
      {
        id: '2',
        numeroTopico: '02',
        nome: 'Moinhos de Vento',
        link: '/aula-01/topico-02'
      },
      {
        id: '2',
        numeroTopico: '03',
        nome: 'Gasolina e Petróleo',
        link: '/aula-01/topico-03'
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
        link: '/aula-01'
      },
      {
        nome: 'Aula 02',
        icone: 'book-open',
        link: '/aula_02'
      },
      {
        id: '3',
        nome: 'Aula 03',
        icone: 'book-open',
        link: '/aula_03'
      },
      {
        id: '4',
        nome: 'Referências',
        icone: 'book',
        link: '/Referências'
      },
    ]
  },
  mutations: {
    clicou(state) {
      localStorage.setItem('store', JSON.stringify(state));
    },
		initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		}
	},
  actions: {
    abrirModalNome({commit, state}) {
      state.modalNome = !state.modalNome
      commit('clicou')
    },
  },
  getters: {
    nomeEscolhido(state) {
      return localStorage.setItem('store', JSON.stringify(state));
    }
  }
})
