<template>
  <div>
    <transition name="CustomModal">
      <div
        class="CustomModal-wrapper"
        v-show="CustomModalAtivo"
        @click="cliqueFora"
      >
        <div
          class="
            CustomModal
            flex flex-col
            items-center
            justify-center
            rounded-lg
          "
        >
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_34RWGs.json"
            background="transparent"
            speed="1"
            style="width: 200px; height: 200px"
            loop
            autoplay
          ></lottie-player>

          <h3>Olá! Como deseja ser chamado?</h3>
          <input
            class="mt-4 rounded text-center"
            v-model="$store.state.aluno"
            type="text"
          />
          <button
            class="rounded bg-primary-color px-5 py-2 text-white mt-5"
            @click="salvarNome"
          >
            Confirmar
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CustomModal",
  data() {
    return {
      CustomModalAtivo: true,
    };
  },
  methods: {
    cliqueFora({ currentTarget, target }) {
      if (currentTarget === target) this.CustomModalAtivo = false;
    },
    salvarNome() {
      this.CustomModalAtivo = !this.CustomModalAtivo;;
    },
  },
};
</script>

<style scoped>
.CustomModal-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.4);
  overflow-y: scroll;
}

.CustomModal {
  position: relative;
  background: #fff;
  padding: 50px;
  max-width: 400px;
  margin: 120px auto 0 auto;
  z-index: 10;
}

.CustomModal-enter,
.CustomModal-leave-to {
  opacity: 0;
}

.CustomModal-enter-active,
.CustomModal-leave-to {
  transition: opacity 0.3s;
}

.CustomModal-enter-to .CustomModal {
  animation: slide 0.3s;
}

.CustomModal-leave-to .CustomModal {
  animation: slide 0.3s reverse;
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
