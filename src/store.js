import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bemVindoDeVolta: null,
    menuShow: false,
    temNome: false,
    iconeMenu: "bars",
    modalNome: null,
    modalAulaCompleta: false,
    progresso: Number("0"),
    nomeDoCurso: "Doces Regionais",
    aluno: "",
    aulas: [
      {
        id: "1",
        numeroAula: "01",
        nomeAula: "Boas práticas na fabricação de alimentos (BPF)",
        descricaoAula: "Para garantir uma melhor condição do alimento é necessário ter atenção e aplicação das boas práticas de fabricação, por meio de cuidados desde a compra dos insumos até chegar às mãos do consumidor e não esquecer do manipulador que é uma peça chave para garantir o controle de qualidade.",
        img: "aula-1.jpg",
        link: "/aula-01",
        completa: false,
      },
      {
        id: "2",
        numeroAula: "02",
        nomeAula: "Conhecendo os utensílios",
        descricaoAula: "Os utensílios são de extrema importância na hora da produção, pois eles irão auxiliar no processo de fabricação dos doces. Para que seja feita a produção dos doces será necessário o uso de alguns utensílios que iremos apresentar.",
        img: "aula-2.jpg",
        link: "/aula-02",
        completa: false,
      },
      {
        id: "3",
        numeroAula: "03",
        nomeAula: "Receitas",
        descricaoAula: "Neste tópico iremos aprender receitas de doces tradicionais, tais como: canjica com milho verde e também milho em conserva, arroz doce saborizado com casca de laranja e especiarias, cocada baiana de colher entre outras receitas que você poderá aplicar de forma fácil e vender.",
        img: "aula-3.jpg",
        link: "/aula-03",
        completa: false,
      },
    ],
    topicosAula_01: [
      {
        id: '1',
        numeroTopico: '01',
        nome: 'Boas práticas na fabricação de alimentos (BPF)',
        link: '/aula-01/topico-01',
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
        nome: 'Aula 01 - Boas práticas na fabricação de alimentos (BPF)',
        icone: 'book-open',
        link: '/aula-01',
        estaNaAula: false
      },
      {
        id: '3',
        nome: 'Aula 02 - Conhecendo os utensílios',
        icone: 'book-open',
        link: '/aula-02',
        estaNaAula: false
      },
      {
        id: '4',
        nome: 'Aula 03 - Receitas',
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
    ESTA_NA_AULA_3(state, payload) {
      state.navbarItems[3].estaNaAula = payload
    },
    modalNomeOposto(state) {
      state.modalNome = true
    },
    iconeMenuOposto(state) {
      state.iconeMenu = "bars"
    },
    menuShowOposto(state) {
      state.menuShow = !state.menuShow
    },
    SALVAR_NOME(state) {
      if(state.aluno.length >= 3 && state.aluno.length <15){
        state.temNome = true
        localStorage.setItem('store', JSON.stringify(state))
        state.modalNome = false
      } else{
        return
      }
    },
    SALVAR_LOCAL_STORAGE(state) {
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_AULA_1(state) {
      if (!state.aulas[0].completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[0].completa = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_AULA_2(state) {
      if (!state.aulas[1].completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[1].completa = true
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
        state.bemVindoDeVolta = true;
			} else {
        state.modalNome = true;
      }
		}
	},
  actions: {
    abrirModalNome({commit}) {
      commit('modalNomeOposto')
      commit('iconeMenuOposto')
      commit('menuShowOposto')
    },
    finalizarAula01({commit}) {
      commit('SHOW_MODAL_COMPLETAR_AULA_1')
      commit('COMPLETAR_AULA_1')
    },
  },
  getters: {
/*     nomeEscolhido(state) {
      return localStorage.setItem('store', JSON.stringify(state))
    } */
  }
})
