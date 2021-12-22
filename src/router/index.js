import Vue from "vue";
import VueRouter from "vue-router";
import Apresentacao from "@/views/Apresentacao.vue";
import Aula01Introducao from "@/views/aulas/aula-01/Aula01Introducao.vue";
import Aula01Topico01 from "@/views/aulas/aula-01/Aula01Topico01.vue";
import Aula01Topico02 from "@/views/aulas/aula-01/Aula01Topico02.vue";

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
    path: "/aula-01/topico-01",
    name: "Aula01Topico01",
    component: Aula01Topico01,
  },
  {
    path: "/aula-01/topico-02",
    name: "Aula01Topico02",
    component: Aula01Topico02,
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
