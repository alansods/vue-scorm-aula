<template>
  <div>
    <transition name="modal">
      <div v-if="$store.state.modalAulaCompleta" class="bg-black bg-opacity-70 fixed w-screen h-screen top-0 left-0 overflow-y-scroll z-40" @click="cliqueFora">
        <div class="modal p-10 bg-white rounded-xl w-2/5 relative z-50 mx-auto mt-16">


        <div class="flex justify-center items-center flex-col">
          <lottie-player
            src="https://assets7.lottiefiles.com/private_files/lf30_yo2zavgg.json"
            background="transparent"
            speed="1"
            style="width: 200px; height: 200px"
            autoplay
          ></lottie-player>

          <h3 class="font-bold text-primary-color text-2xl mb-5">
            Parabéns, <span class="font-bold">{{ $store.state.aluno }}</span
            >!
          </h3>

          <p class="text-center">
            Você concluiu a
            <span class="font-bold"
              >aula {{ $store.state.aulas[0].numeroAula }} -
              {{ $store.state.aulas[0].nomeAula }}</span
            >.
          </p>

          <div class="flex justify-evenly mt-10">
            <button
              class="
                bg-gray-400
                px-5
                py-2
                rounded-lg
                text-gray-200
                mx-2
                transform
                hover:-translate-y-1
                shadow
                transition-all
              "
            >
              <v-icon name="home" class="mr-1" />
              Início
            </button>
            <button
              class="
                bg-primary-color
                px-5
                py-2
                rounded-lg
                text-white
                mx-2
                transform
                hover:-translate-y-1
                shadow
                transition-all
              "
            >
              <v-icon name="arrow-left" class="mr-1" />
            </button>
            <button
              class="
                bg-primary-color
                px-5
                py-2
                rounded-lg
                text-white
                mx-2
                transform
                hover:-translate-y-1
                shadow
                transition-all
              "
            >
              <v-icon name="arrow-right" class="ml-1" />
            </button>
          </div>
        </div>
          <a class="absolute -top-3 -right-3 rounded-full cursor-pointer bg-red-500 px-4 py-2 text-white font-bold" @click="$store.commit('SHOW_MODAL_COMPLETAR_AULA_1', false)">X</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ModalAulaCompleta",
  data() {
    return {
    };
  },
  methods: {
    cliqueFora({ currentTarget, target }) {
      if (currentTarget === target) {
        this.$store.commit('SHOW_MODAL_COMPLETAR_AULA_1', false)
      };
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
