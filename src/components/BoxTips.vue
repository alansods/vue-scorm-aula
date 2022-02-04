<template>
  <div
    class="
      bg-green-400
      p-8
      rounded-lg
      shadow
      my-5
      text-white
      cursor-pointer
      transform
      transition-all
    "
    @click="clicou = !clicou"
  >
    <div class="flex items-center font-semibold text-2xl text-white">
      <v-icon :name="icone" class="mr-2 fill-current" scale="1.8" />
      <h3><slot name="titulo"></slot></h3>
      <small class="text-xs font-light ml-2">(clique aqui)</small>
    </div>
    <div class="transition-all" :class="clicou ? 'is-open' : 'is-closed'">
      <slot name="conteudo"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icone"],
  data() {
    return {
      clicou: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.clicou = !this.clicou;
    },
  },
};
</script>

<style scoped>
.is-closed {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
}

.is-open {
  max-height: 300px;
  opacity: 1;
  margin-top: 1rem;
}
</style>
