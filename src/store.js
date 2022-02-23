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
    btnAlunoInativo: true,
    modalCursoFinalizado: false,
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
        receita_1_completa: false,
        receita_2_completa: false,
        receita_3_completa: false,
        receita_4_completa: false,
        receita_5_completa: false,
        receita_6_completa: false,
        receita_7_completa: false,
        receita_8_completa: false,
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
    ],
    receitas: [
      {
        id: 1,
        nome: "Arroz doce",
        imagem: "arroz-doce.jpg",
        tempo: "25min",
        porcoes: "8 porções",
        calorias: "300kcal",
        dificuldade: "fácil",
        path: "/aula-03/arroz-doce",
        finalizada: false,
      },
      {
        id: 2,
        nome: "Mungunzá doce",
        imagem: "mugunza-doce.jpg",
        tempo: "55min",
        porcoes: "12 porções",
        calorias: "100kcal",
        dificuldade: "fácil",
        path: "/aula-03/mugunza-doce",
        finalizada: false,
      },
      {
        id: 3,
        nome: "Canjica de milho verde",
        imagem: "canjica-de-milho-verde.jpg",
        tempo: "50min",
        porcoes: "7 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-03/canjica-de-milho-verde",
        finalizada: false,
      },
      {
        id: 4,
        nome: "Canjica de milho em conserva",
        imagem: "canjica-de-milho-em-conserva.jpg",
        tempo: "40min",
        porcoes: "7 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-03/canjica-de-milho-em-conserva",
        finalizada: false,
      },
      {
        id: 5,
        nome: "Cocada baiana de colher",
        imagem: "cocada-baiana-de-colher.jpg",
        tempo: "30min",
        porcoes: "12 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-03/cocada-baiana-de-colher",
        finalizada: false,
      },
      {
        id: 6,
        nome: "Pé de moleque",
        imagem: "pe-de-moleque.jpg",
        tempo: "35min",
        porcoes: "16 porções",
        calorias: "200kcal",
        dificuldade: "fácil",
        path: "/aula-03/pe-de-moleque",
        finalizada: false,
      },
      {
        id: 7,
        nome: "Brigadeiro de milho",
        imagem: "brigadeiro-de-milho.jpg",
        tempo: "45min",
        porcoes: "85 porções",
        calorias: "200kcal",
        dificuldade: "médio",
        path: "/aula-03/brigadeiro-de-milho",
        finalizada: false,
      },
      {
        id: 8,
        nome: "Queijadinha",
        imagem: "queijadinha.jpg",
        tempo: "60min",
        porcoes: "20 porções",
        calorias: "200kcal",
        dificuldade: "médio",
        path: "/aula-03/queijadinha",
        finalizada: false,
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
        state.modalNome = false
        localStorage.setItem('store', JSON.stringify(state))
        
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
    COMPLETAR_RECEITA_1(state) {
      if (!state.aulas[2].receita_1_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_1_completa = true
      state.receitas[0].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_2(state) {
      if (!state.aulas[2].receita_2_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_2_completa = true
      state.receitas[1].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_3(state) {
      if (!state.aulas[2].receita_3_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_3_completa = true
      state.receitas[2].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_4(state) {
      if (!state.aulas[2].receita_4_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_4_completa = true
      state.receitas[3].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_5(state) {
      if (!state.aulas[2].receita_5_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_5_completa = true
      state.receitas[4].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_6(state) {
      if (!state.aulas[2].receita_6_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_6_completa = true
      state.receitas[5].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_7(state) {
      if (!state.aulas[2].receita_7_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_7_completa = true
      state.receitas[6].finalizada = true
      localStorage.setItem('store', JSON.stringify(state))
    },
    COMPLETAR_RECEITA_8(state) {
      if (!state.aulas[2].receita_8_completa) {
        state.progresso = state.progresso + 10
      }
      state.aulas[2].receita_8_completa = true
      state.receitas[7].finalizada = true
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
        if (state.aluno.length >= 3) {
          state.bemVindoDeVolta = true;
        } 
        localStorage.setItem('store', JSON.stringify(state))
			} else {
        state.modalNome = true;
        localStorage.setItem('store', JSON.stringify(state))
      }
		}
	},
  actions: {
    abrirModalNome({commit}) {
      commit('modalNomeOposto')
      if(this.state.menuShow){
        commit('iconeMenuOposto')
        commit('menuShowOposto')
      }
    },
    finalizarAula01({commit}) {
      commit('SHOW_MODAL_COMPLETAR_AULA_1')
      //commit('COMPLETAR_AULA_1')
    },
    finalizarAula02({commit}) {
      commit('SHOW_MODAL_COMPLETAR_AULA_1')
      //commit('COMPLETAR_AULA_2')
    },
  },
  getters: {
/*     nomeEscolhido(state) {
      return localStorage.setItem('store', JSON.stringify(state))
    } */
  }
})
