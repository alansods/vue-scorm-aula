<template>
  <router-link :to="navbarItem.link">
    <li class="px-5 py-2 my-1 hover:bg-gray-200 rounded flex items-center transition-all">
      <v-icon :name="navbarItem.icone" class="mr-2" />
      {{ navbarItem.nome }}
    </li>
    </router-link
  >
</template>

<script>
export default {
  props: ["navbarItem"],
};
</script>

<style></style>
