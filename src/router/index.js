import Vue from "vue";
import VueRouter from "vue-router";
import Apresentacao from "@/views/Apresentacao.vue";
import Aula01 from "@/views/Aula01.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Apresentação",
    component: Apresentacao,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/aula01",
    component: Aula01,
  }
];

const router = new VueRouter({
  //mode: "history",
  routes,
});

export default router;
