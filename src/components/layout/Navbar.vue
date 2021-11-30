<template>
    <nav id="navbar" class="fixed z-50 top-0 left-0 w-screen h-12 bg-primary-color flex px-5 justify-between items-center">
      <div class="text-white">
        <v-icon name="bars"/>
        <router-link to="/" class="mx-2"></router-link>
      </div>

      <div class="text-white font-light text-right text-xs xl:pr-5 w-2/3">
        {{ $store.state.nomeDoCurso }}
      </div>
    </nav>
    
</template>


<script>
export default {
  name: "Navbar",
};
</script>


<style scoped>
</style>

