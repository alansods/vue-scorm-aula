<template>
    <nav id="navbar" class="bg-primary-color flex px-5 py-2 justify-between">
      <div class="text-white">
        <v-icon name="bars"/>
        <router-link to="/" class="mx-2"></router-link>
      </div>

      <div class="text-white">
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

