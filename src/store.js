import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "Lobo",
  },
  mutations: {
    changeUSer (state, payload) {
      state.user = payload
    }
  }
})

//payload é o novo nome.