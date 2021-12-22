<template>
  <button
    class="
      bg-primary-color
      xl:hover:bg-primary-color-hover
      transform
      transition
      active:scale-75
      py-3
      px-4
      rounded-lg
      text-white
    "
  >
    <v-icon :name="icone" />
  </button>
</template>

<script>
export default {
  props: ["icone"],
  data() {
    return {
    }
  }
};
</script>

<style></style>
