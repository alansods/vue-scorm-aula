<template>
  <div
    id="fixed-nav"
    class="
      fixed
      w-56
      m-auto
      left-0
      right-0
      bottom-5
      p-5
      rounded-2xl
      flex
      justify-between
      items-center
      bg-white
      border-2 border-gray-200
      text-xs
      select-none
    "
  >
    <div id="prev">
      <router-link :to="$store.state.anterior"
        ><NavButton :icone="'arrow-left'"></NavButton
      ></router-link>
    </div>
    <div id="title" class="text-center">
      <div class="font-bold text-sm">Aula {{ $store.state.aulaAtual }}</div>
      <div class="font-medium">Tópico</div>
      <div>{{ $store.state.topicoAtual }}</div>
    </div>
    <div id="next">
      <router-link :to="$store.state.proximo"
        ><NavButton :icone="'arrow-right'"></NavButton
      ></router-link>
    </div>
  </div>
</template>

<script>
import NavButton from "./NavButton-back.vue";
export default {
  components: { NavButton },
  data() {
    return {
    };
  },

};
</script>

<style></style>
