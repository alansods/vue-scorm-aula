import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuShow: false,
    temNome: false,
    iconeMenu: "bars",
    modalNome: true,
    modalAulaCompleta: false,
    progresso: Number("0"),
    nomeDoCurso: "Doces Regionais",
    aluno: "",
    aulas: [
      {
        id: "1",
        numeroAula: "01",
        nomeAula: "Boas práticas na fabricação de alimentos (BPF)",
        descricaoAula: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: "aula-1.jpg",
        link: "/aula-01",
        completa: false,
      },
      {
        id: "2",
        numeroAula: "02",
        nomeAula: "Conhecendo os utensílios",
        descricaoAula: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: "aula-2.jpg",
        link: "/aula-02"
      },
      {
        id: "3",
        numeroAula: "03",
        nomeAula: "Receitas",
        descricaoAula: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: "aula-3.jpg",
        link: "/aula-03"
      },
    ],
    topicosAula_01: [
      {
        id: '1',
        numeroTopico: '01',
        nome: 'Boas práticas na fabricação de alimentos (BPF)',
        link: '/aula-01/topico-01'
      },
      {
        id: '2',
        numeroTopico: '02',
        nome: 'Contaminação Química, física e biológica',
        link: '/aula-01/topico-02'
      },
      {
        id: '3',
        numeroTopico: '03',
        nome: 'Higiene do manipulador de alimentos',
        link: '/aula-01/topico-03'
      },
      {
        id: '4',
        numeroTopico: '04',
        nome: 'Como lavar as mãos?',
        link: '/aula-01/topico-03'
      },
    ],
    navbarItems: [
      {
        id: '1',
        nome: 'Apresentação',
        icone: 'home',
        link: '/',
        estaNaAula: false
      },
      {
        id: '2',
        nome: 'Aula 01',
        icone: 'book-open',
        link: '/aula-01',
        estaNaAula: false
      },
      {
        id: '3',
        nome: 'Aula 02',
        icone: 'book-open',
        link: '/aula-02',
        estaNaAula: false
      },
      {
        id: '4',
        nome: 'Aula 03',
        icone: 'book-open',
        link: '/aula-03',
        estaNaAula: false
      },
      {
        id: '5',
        nome: 'Referências',
        icone: 'book',
        link: '/Referências',
        estaNaAula: false
      },
    ]
  },
  mutations: {
    ESTA_NA_AULA_APRESENTACAO(state, payload) {
      state.navbarItems[0].estaNaAula = payload
    },
    ESTA_NA_AULA_1(state, payload) {
      state.navbarItems[1].estaNaAula = payload
    },
    ESTA_NA_AULA_2(state, payload) {
      state.navbarItems[2].estaNaAula = payload
    },
    modalNomeOposto(state) {
      state.modalNome = !state.modalNome
    },
    iconeMenuOposto(state) {
      state.iconeMenu = "bars"
    },
    menuShowOposto(state) {
      state.menuShow = !state.menuShow
    },
    SALVAR_NOME(state) {
      state.temNome = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    SALVAR_LOCAL_STORAGE(state) {
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_AULA_1(state) {
      if (!state.aulas[0].completa) {
        state.progresso = state.progresso + 30
      }
      state.aulas[0].completa = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    SHOW_MODAL_COMPLETAR_AULA_1(state) {
      state.modalAulaCompleta = true
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
    abrirModalNome({commit}) {
      commit('modalNomeOposto')
      commit('iconeMenuOposto')
      commit('menuShowOposto')
      commit('SALVAR_NOME')
    },
    finalizarAula01({commit}) {
      commit('SHOW_MODAL_COMPLETAR_AULA_1')
      commit('COMPLETAR_AULA_1')
    }
  },
  getters: {
/*     nomeEscolhido(state) {
      return localStorage.setItem('store', JSON.stringify(state))
    } */
  }
})
