<template>
  <div id="app" class="bg-gray-200 font-poppins pb-10 text-dark-color">
    <Navbar />
    <ModalName />
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
  margin: 2rem 25px;
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
  margin-left: -1.7rem;
  width: 1.2rem;
  margin-right: .4rem;
}


</style>

<script>
export default {
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
  },
};
</script>
