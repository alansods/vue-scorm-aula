import Vue from "vue";
import VueRouter from "vue-router";
import Apresentacao from "@/views/Apresentacao.vue";
import Aula01Introducao from "@/views/aulas/aula-01/Aula01Introducao.vue";
import Aula02Introducao from "@/views/aulas/aula-02/Aula02Introducao.vue";
import Aula03Introducao from "@/views/aulas/aula-03/Aula03Introducao.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Apresentacao",
    component: Apresentacao,
  },
  {
    path: "/aula-01",
    name: "Aula01Introducao",
    component: Aula01Introducao,
  },
  {
    path: "/aula-02",
    name: "Aula02Introducao",
    component: Aula02Introducao,
  },
  {
    path: "/aula-03",
    name: "Aula03Introducao",
    component: Aula03Introducao,
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
router.afterEach(to => {
  localStorage.setItem('router', to.name)
})

let isFirstTransition = true
router.beforeEach((to, from, next) => {
  
   const lastRouteName = localStorage.getItem('router')         
   const shouldRedirect = Boolean( to.name === "Apresentacao" && lastRouteName && isFirstTransition)
   
   if (shouldRedirect && to.name !== from.name) {
     isFirstTransition = false
     next({ name: lastRouteName })
     console.log("pega o localstorage")
   } else {
      next()
      console.log("Navegou normal sem reabrir a aba")
   }
})




export default router;
