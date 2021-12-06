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
      <div class="text-white cursor-pointer">
        <v-icon scale="1.2" @click="clicouMenu()" :name="iconeMenu" />
      </div>

      <div class="text-white font-light text-right text-xs xl:pr-5 w-2/3">
        <router-link to="/">{{ $store.state.nomeDoCurso }}</router-link>
      </div>
    </nav>

    <div id="menu" v-show="menuShow">
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
      menuShow: false,
      iconeMenu: "bars",
    }
  },
  methods: {
    cliqueFora({ currentTarget, target }) {
      if (currentTarget === target) this.menuShow = false;
      this.iconeMenu = "bars";
    },
    clicouMenu() {
      this.menuShow = !this.menuShow;
      if (this.menuShow) {
        this.iconeMenu = "times";
      }
      if (!this.menuShow) {
        this.iconeMenu = "bars";
      }
    },
    // goToAbout() {
    //   this.$router.push("/about");
    // },
  },
  //quando muda rota fecha o menu
  watch: {
    $route() {
      if (this.menuShow) {
        this.menuShow = !this.menuShow;
        this.iconeMenu = "bars";
      }
    },
  },
};
</script>

<style scoped>



</style>
