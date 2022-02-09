<template>
  <button
    class="
      bg-primary-color
      xl:hover:bg-primary-color-hover
      xl:transform
      xl:hover:-translate-y-1
      xl:transition-all
      py-3
      px-4
      rounded-lg
      text-white
    "
  >
    <v-icon scale="1.5" class="icone-setas" :name="icone" />
  </button>
</template>

<script>
export default {
  props: ["icone"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.icone-setas {
  fill: #fff;
}
</style>
