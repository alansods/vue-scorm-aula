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
    <div class="flex items-center font-bold text-2xl">
      <v-icon name="question-circle" class="mr-2" scale="1.5" />
      <h3>Saiba Mais</h3>
      <small class="text-xs font-light ml-1">(clique aqui)</small>
    </div>
    <div class="mt-3 transition-all" :class="clicou ? 'is-open' : 'is-closed'">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, .
      </p>
    </div>
  </div>
</template>

<script>
export default {
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
  opacity: 0;
  margin: 0;
}

.is-open {
  max-height: 300px;
  opacity: 1;
}
</style>
