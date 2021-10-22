<template>
    <nav class="bg-primary-color flex px-5 py-2 justify-between">
      <div>
      <router-link to="/"><img src="@/assets/img/padrao/senai-logo.svg" alt="Senai" class="w-28"></router-link>
      </div>
      <div class="text-white">
        <v-icon name="bars"/>
        <router-link to="/" class="mx-2">Home</router-link>
        <router-link to="/About" class="mx-2">Sobre</router-link>
        <router-link to="/Aula01" class="mx-2">Aula 01</router-link>
      </div>
    </nav>
    
</template>


<script>
export default {
  name: "HeaderPrincipal",
};
</script>


<style scoped>
</style>

