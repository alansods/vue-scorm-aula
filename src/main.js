import Vue from "vue";;
import App from "@/App.vue";
import router from "@/router";
import store from "./store.js";
import titleMixin from './mixins/titleMixin'

Vue.mixin(titleMixin)


//Importing vue-awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

//Importing the global css file
import "@/assets/css/styles.css";

import Navbar from "@/components/layout/navbar/Navbar.vue"; //Importando como global
import Footer from "@/components/layout/Footer.vue"; //Importando como global
import ModalName from "@/components/ModalName.vue"; //Importando como global
import NomeAluno from "@/components/NomeAluno.vue"; //Importando como global
import Modal from "@/components/Modal.vue"; //Importando como global
import IconeObjetivos from "@/components/IconeObjetivos.vue"; //Importando como global

// Registrando componentes globais
Vue.component("Navbar", Navbar);
Vue.component("Footer", Footer);
Vue.component("ModalName", ModalName);
Vue.component("NomeAluno", NomeAluno);
Vue.component("Modal", Modal);
Vue.component("IconeObjetivos", IconeObjetivos);

Vue.config.productionTip = false;



new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
