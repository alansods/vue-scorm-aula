<template>
  <div>
    <nav
      id="navbar"
      class="
        fixed
        z-40
        top-0
        left-0
        w-screen
        h-12
        bg-primary-color
        flex
        px-5
        justify-between
        items-center
      "
    >
      <div class="text-white">
        <router-link to="/"><v-icon class="mr-2 cursor-pointer active:scale-75 transform transition" scale="1.3" name="home" /></router-link>
        |
        <v-icon class="ml-2 cursor-pointer active:scale-75 transform transition" scale="1.2" @click="clicouMenu" :name="$store.state.iconeMenu" />
        
      </div>

      <div class="text-white font-light text-right text-xs xl:pr-5 w-2/3">
        <!-- <router-link to="/">{{ $store.state.nomeDoCurso }}</router-link> -->
        <div id="progress-bar">
          <div class="progress-text">{{ this.$store.state.progresso }}</div>
          <div id="green" :style="{width:this.$store.state.progresso + '%'}"></div>
        </div>
      </div>
    </nav>

    <div v-if="$store.state.menuShow" class="menu" :class="{ativo: $store.state.menuShow}">
      <div
        id="overlay"
        @click="cliqueFora"
        class="bg-black opacity-0 h-screen w-screen fixed top-0 left-0 z-30"
      ></div>

      <div
        id="menu-container"
        class="
          fixed
          p-5
          top-0
          left-0
          h-screen
          w-2/3
          xl:w-1/5
          z-30
          bg-white
          text-dark-color
          shadow-lg
        "
      >
        <nav class="mt-14">
          <h2 class="font-bold text-2xl mb-5">Menu</h2>
          <button class="bg-primary-color rounded px-5 py-2 text-white" @click="$store.dispatch('abrirModalNome')">Editar Nome</button>
          <ul>
            <NavbarItems
              v-for="navbarItem in $store.state.navbarItems"
              :key="navbarItem.id"
              :navbarItem="navbarItem"
            />
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarItems from "@/components/layout/navbar/NavbarItems.vue";
export default {
  name: "Navbar",
  components: { NavbarItems },
  data() {
    return {
      progresso: 50,
    }
  },
  methods: {
    cliqueFora({ currentTarget, target }) {
      if (currentTarget === target) this.$store.state.menuShow = false;
      this.$store.state.iconeMenu = "bars";
    },
    clicouMenu() {
      this.$store.state.menuShow = !this.$store.state.menuShow;
      if (this.$store.state.menuShow) {
        this.$store.state.iconeMenu = "times";
      }
      if (!this.$store.state.menuShow) {
        this.$store.state.iconeMenu = "bars";
      }
    },
    // goToAbout() {
    //   this.$router.push("/about");
    // },
  },
  //quando muda rota fecha o menu
  watch: {
    $route() {
      if (this.$store.state.menuShow) {
        this.$store.state.menuShow = !this.$store.state.menuShow;
        this.$store.state.iconeMenu = "bars";
      }
    },
  },
};
</script>

<style scoped>

.menu {
  opacity: 0;
}

.menu.ativo {
  opacity: 1;
}

@keyframes menu {
  from {
    transform: translate3d(-300px, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

#progress-bar {
  margin-top: 5px;
  position: relative;
  max-width: 300px;
  height: 12px;
  background: gray;
  margin-left: auto;
  border-radius: 20px;
}

#green {
  border-radius: inherit;
  position: absolute;
  top: 0;
  left: 0;
  background: greenyellow;
  height: inherit;
}

.progress-text {
  position: absolute;
  font-size: .5rem;
  font-weight: bold;
  color: #333;
  z-index: 1;
  left: 50%;
  top: -4px;
}
</style>
