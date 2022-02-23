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
        select-none
      "
    >
      <div class="text-white flex justify-center items-center leading-none">
        
        <a class="cursor-pointer active:scale-75 transform transition" @click="$router.push('/')">
          <v-icon class="fill-current" scale="1.2" name="home" />
        </a>

        <span class="mx-3">|</span>

        <a class="cursor-pointer active:scale-75 transform transition" @click="clicouMenu">
          <v-icon class="fill-current" scale="1.2" :name="$store.state.iconeMenu" />
        </a>
        
      </div>

      <div class="text-white font-light text-right text-xs xl:pr-5 w-2/3 flex">
        <!-- <router-link to="/">{{ $store.state.nomeDoCurso }}</router-link> -->
        <div id="progress-bar" class="flex-1 mr-3">
          <div class="progress-text">{{ this.$store.state.progresso + '%' }}</div>
          <div id="green" :style="{width:this.$store.state.progresso + '%'}"></div>
        </div>
        <div id="menu-right" @click.prevent="$store.dispatch('abrirModalNome')"><v-icon class="fill-current cursor-pointer active:scale-75 transform transition" scale="1.2" name="user" /></div>
      </div>
    </nav>

    <div v-if="$store.state.menuShow" class="fixed top-0 left-0 z-30">
      <div
        id="overlay"
        @click="cliqueFora"
        class="bg-black opacity-0 h-screen w-screen"
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
          xl:w-3/12
          bg-white
          text-dark-color
          shadow-lg
          menu-animation
        "
      >
        <nav class="mt-14">
          <h2 class="font-bold text-3xl mb-5">Sumário</h2>
          <!-- <div class="px-5 py-2 my-1 hover:bg-gray-200 rounded flex items-center cursor-pointer" @click.prevent="$store.dispatch('abrirModalNome')"><v-icon name="edit" class="mr-2" />Editar Nome
          </div> -->
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

.menu-animation {
  opacity: 1;
  animation: slideMenu .4s ease;
}

@keyframes slideMenu {
  from {
    transform: translate3d(-300px, 0, 0);
  }
  to {
    transform: initial;
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
  background: #34D399;
  height: 100%;
  transition: all .5s ease;
}

.progress-text {
  position: absolute;
  font-size: .5rem;
  font-weight: bold;
  color: #333;
  z-index: 1;
  left: 50%;
  top: -2px;
}

</style>
