<template>
  <div>
    <button class="rounded bg-primary-color text-white px-5 py-3" @click="ModalAtivo = !ModalAtivo"><slot name="nomeBotao"></slot></button>

    <transition name="Modal">
      <div class="bg-black bg-opacity-70 fixed w-screen h-screen top-0 left-0 overflow-y-scroll z-40" v-show="ModalAtivo" @click="cliqueFora">
        <div class="p-10 bg-gray-200 rounded-xl w-2/4 relative z-50 mx-auto mt-32">
          <slot name="conteudo"></slot>
          <a class="absolute -top-3 -right-3 rounded-lg cursor-pointer bg-red-500 px-4 py-2 text-white font-bold" @click="ModalAtivo = !ModalAtivo">X</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      ModalAtivo: false,
    };
  },
  methods: {
    cliqueFora({ currentTarget, target }) {
      if (currentTarget === target) this.ModalAtivo = false;
    },
  },
};
</script>

<style scoped>

.Modal-enter,
.Modal-leave-to {
  opacity: 0;
}

.Modal-enter-active,
.Modal-leave-to {
  transition: opacity 0.3s ease;
}

.Modal-enter-to .Modal {
  animation: slide 0.3s ease;
}

.Modal-leave-to .Modal {
  animation: slide 0.3s reverse ease;
}

@keyframes slide {
  from {
    transform: translate3d(0, -40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>
