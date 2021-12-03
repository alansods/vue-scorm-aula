import Vue from "vue";
import VueRouter from "vue-router";
import Apresentacao from "@/views/Apresentacao.vue";
import Aula01Introducao from "@/views/aulas/aula-01/Aula01Introducao.vue";
import Aula01Topico01 from "@/views/aulas/aula-01/Aula01Topico01.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Apresentação",
    component: Apresentacao,
  },
  {
    path: "/aulas/aula-01/Aula01Introducao",
    name: "Aula01Introducao",
    component: Aula01Introducao,
  },
  {
    path: "/aulas/aula-01/Aula01Topico01",
    name: "Aula01Topico01",
    component: Aula01Topico01,
  },
];

const router = new VueRouter({
  //mode: "history",
  routes,
});

export default router;
