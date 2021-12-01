import Vue from "vue";;
import App from "@/App.vue";
import router from "@/router";
import store from "./store.js";

//Importing vue-awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

//Importing the global css file
import "@/assets/css/styles.css";

import Navbar from "@/components/layout/navbar/Navbar.vue"; //Importando como global
import Footer from "@/components/layout/Footer.vue"; //Importando como global
import CustomModal from "@/components/CustomModal.vue"; //Importando como global
import PageLoading from "@/components/PageLoading.vue"; //Importando como global

// Registrando componentes globais
Vue.component("Navbar", Navbar);
Vue.component("Footer", Footer);
Vue.component("CustomModal", CustomModal);
Vue.component("PageLoading", PageLoading);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
