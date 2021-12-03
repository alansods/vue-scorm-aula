import Vue from "vue";
import VueRouter from "vue-router";
import Apresentacao from "@/views/Apresentacao.vue";
import Aula_01 from "@/views/aulas/aula_01/Aula_01_Introducao.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Apresentação",
    component: Apresentacao,
  },
  {
    path: "/aulas/aula_01/Aula_01_Introducao",
    name: "Aula_01",
    component: Aula_01,
  },
];

const router = new VueRouter({
  //mode: "history",
  routes,
});

export default router;
