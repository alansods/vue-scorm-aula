import Vue from "vue";
import VueRouter from "vue-router";
import Apresentacao from "@/views/Apresentacao.vue";
import Aula01Introducao from "@/views/aulas/aula-01/Aula01Introducao.vue";
import Aula02Introducao from "@/views/aulas/aula-02/Aula02Introducao.vue";
import Aula03Introducao from "@/views/aulas/aula-03/Aula03Introducao.vue";
import Receitas from "@/views/aulas/aula-03/Receitas.vue";
import ArrozDoce from "@/views/aulas/aula-03/receitas/ArrozDoce.vue";
import MugunzaDoce from "@/views/aulas/aula-03/receitas/MugunzaDoce.vue";
import CanjicaDeMilhoVerde from "@/views/aulas/aula-03/receitas/CanjicaDeMilhoVerde.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Apresentacao",
    component: Apresentacao,
  },
  {
    path: "/aula-01",
    name: "Aula 01 - Boas práticas na fabricação de alimentos (BPF)",
    component: Aula01Introducao,
  },
  {
    path: "/aula-02",
    name: "Aula 02 - Conhecendo os utensílios",
    component: Aula02Introducao,
  },
  {
    path: "/aula-03",
    name: "Aula 03 - Receitas",
    component: Aula03Introducao,
    children: [
      {
        path: "",
        name: "Receitas",
        component: Receitas,
      },
      {
        path: "arroz-doce",
        name: "Aula 03 - Receita: Arroz doce",
        component: ArrozDoce,
      },
      {
        path: "mugunza-doce",
        name: "Aula 03 - Receita: Mugunzá doce",
        component: MugunzaDoce,
      },
      {
        path: "canjica-de-milho-verde",
        name: "Aula 03 - Receita: Canjica de milho verde",
        component: CanjicaDeMilhoVerde,
      },
    ],
  },
];

const router = new VueRouter({
  //mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

//salvar ultima pagina visitada ao reabrir o site
router.afterEach((to) => {
  localStorage.setItem("router", to.name);
});

let isFirstTransition = true;
router.beforeEach((to, from, next) => {
  const lastRouteName = localStorage.getItem("router");
  const shouldRedirect = Boolean(
    to.name === "Apresentacao" && lastRouteName && isFirstTransition
  );

  if (shouldRedirect && to.name !== from.name) {
    isFirstTransition = false;
    next({ name: lastRouteName });
    console.log("pegou o localstorage");
  } else {
    next();
    console.log("Navegou normal sem reabrir a aba");
  }
});

export default router;
