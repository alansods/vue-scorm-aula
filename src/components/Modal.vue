<template>
  <div>
    <button class="rounded bg-primary-color text-white px-5 py-3" @click="modalAtivo = !modalAtivo"><slot name="nomeBotao"></slot></button>

    <transition name="modal">
      <div class="bg-black bg-opacity-70 fixed w-screen h-screen top-0 left-0 overflow-y-scroll z-40" v-show="modalAtivo" @click="cliqueFora">
        <div class="modal p-10 bg-white rounded-xl w-2/4 relative z-50 mx-auto mt-32">
          <slot name="conteudo"></slot>
          <a class="absolute -top-3 -right-3 rounded-full cursor-pointer bg-red-500 px-4 py-2 text-white font-bold" @click="modalAtivo = !modalAtivo">X</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      modalAtivo: false,
    };
  },
  methods: {
    cliqueFora({ currentTarget, target }) {
      if (currentTarget === target) this.modalAtivo = false;
    },
  },
};
</script>

<style scoped>

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-to {
  transition: opacity 0.3s ease;
}

.modal-enter-to .modal {
  animation: slide 0.3s ease;
}

.modal-leave-to .modal {
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
