import Vue from "vue";
import VueRouter from "vue-router";
import Apresentacao from "@/views/Apresentacao.vue";
import Aula01Introducao from "@/views/aulas/aula-01/Aula01Introducao.vue";
import Aula01Topico01 from "@/views/aulas/aula-01/Aula01Topico01.vue";
import Aula01Finalizada from "@/views/aulas/aula-01/Aula01Finalizada.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Apresentação",
    component: Apresentacao,
  },
  {
    path: "/aula-01",
    name: "Aula01Introducao",
    component: Aula01Introducao,
  },
  {
    path: "/aula-01/topico-01",
    name: "Aula01Topico01",
    component: Aula01Topico01,
  },
  {
    path: "/aula-01/aula-01-conclusao",
    name: "Aula01Finalizada",
    component: Aula01Finalizada,
  },
];

const router = new VueRouter({
  //mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
