<template>
  <router-link :to="navbarItem.link">
    <li class="px-5 py-2 my-1 hover:bg-gray-200 rounded flex items-center" :class="{'bg-gray-200': navbarItem.estaNaAula}">
      <v-icon :name="navbarItem.icone" class="mr-2" />
      <span class="item-menu">{{ navbarItem.nome }}</span>
    </li>
    </router-link
  >
</template>

<script>
export default {
  props: ["navbarItem"],
};
</script>

<style scoped>

.item-menu{
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
}

</style>
