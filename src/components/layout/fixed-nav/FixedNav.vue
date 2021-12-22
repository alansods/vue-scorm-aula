<template>
  <div id="fixed-nav" class="fixed w-56 m-auto left-0 right-0 bottom-5 p-5 rounded-2xl flex justify-between items-center bg-white border-2 border-gray-200 text-xs">
    <div id="prev">
      <router-link :to="anterior"><NavButton :icone="'arrow-left'"></NavButton></router-link>
    </div>
    <div id="title" class="text-center">
      <div class="font-medium">Titulo</div>
      <div>1/5</div>
    </div>
    <div id="next">
      <router-link :to="proximo"><NavButton :icone="'arrow-right'"></NavButton></router-link>
    </div>
  </div>
</template>

<script>
import NavButton from './NavButton.vue'
export default {
  components: { NavButton },
  props: ["anterior", "proximo"],

}
</script>

<style>

</style>