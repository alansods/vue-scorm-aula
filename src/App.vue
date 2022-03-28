<template>
  <div id="app" class="bg-gray-200 font-poppins pb-10 text-dark-color">
    <Navbar />
    <ModalName />
    <ModalBemVindoDeVolta/>
    <ModalCursoFinalizado/>
    <div class="pt-10">
      <transition mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

p {
  margin: 0.7rem 0 !important;
}

p:first-of-type {
  margin-top: 0 !important;
}

p:last-of-type {
  margin-bottom: 0 !important;
}

.v-enter,
.v-leave-to {
  transform: translate3d(0, -20px, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

/* SCROLLBAR STYLE */
/* width */
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c5ccd3;
  border-radius: 100vh;
  border: 3px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

/* LISTA-CHECK */

.lista-check {
  margin: 2rem 25px 2rem 32px;
}

.lista-check li {
  margin: 2rem 0;
  margin: .6rem 0;
  list-style: none;
}

.lista-check li:last-of-type {
  margin: 0;
}

.lista-check li::before {
  content: url('./assets/img/padrao/check.svg');
  display: inline-block;
  margin-left: -1.8rem;
  width: 1.2rem;
  margin-right: .4rem;
}

/* LISTA-NUMÉRICA */
.lista-numerica{
  counter-reset: item;
  margin-left: 30px;}

ol li {
  margin: 2rem 0;
  margin: 1rem 0;
  list-style: none;
  counter-increment: item;
  position: relative;
}

ol li:last-of-type {
  margin: 0;
}

ol li::before {
  content:counter(item)".";
  counter-increment: li;
  font-weight: bold;
  font-size: 1.35rem;
  position: absolute;
  line-height: 1;
  left: -28px;
}

.img-bg-apresentacao {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(./assets/img/padrao/bg-apresentacao.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.img-bg-aula {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.2)), url(./assets/img/padrao/bg-aula.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media (max-width: 600px){
  .img-bg-aula {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.2)), url(./assets/img/padrao/bg-aula.jpg);
}
}

</style>

<script>
import ModalBemVindoDeVolta from '@/components/ModalBemVindoDeVolta'
import ModalCursoFinalizado from '@/components/ModalCursoFinalizado'

export default {
  components: { ModalBemVindoDeVolta, ModalCursoFinalizado },
  data() {
    return {};
  },
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  computed: {

  },
  watch: {
    '$store.state.progresso': function () {
      console.log(this.$store.state.progresso);
      this.$store.commit("SALVAR_LOCAL_STORAGE");
    },
    '$store.state.aluno': function () {
      this.$store.state.aluno = this.$store.state.aluno.slice(0,14)
    },
    '$store.state.modalAulaCompleta': function () {
      console.log(this.$store.state.modalAulaCompleta);
      this.$store.commit("SALVAR_LOCAL_STORAGE");
    },
    '$store.state.modalCursoFinalizado': function () {
      this.$store.commit("SALVAR_LOCAL_STORAGE");
    },
  },
};
</script>
