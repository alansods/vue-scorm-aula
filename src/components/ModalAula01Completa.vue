<template>
  <div>
    <transition name="modal">
      <div
        v-if="$store.state.modalAulaCompleta"
        class="
          bg-black bg-opacity-70
          fixed
          w-screen
          h-full
          overflow-y-scroll
          z-40
          flex flex-col
          items-center
          justify-center
        "
        @click="cliqueFora"
      >
        <div
          class="
            modal
            px-5
            py-8
            bg-white
            rounded-xl
            w-11/12
            md:w-2/6
            relative
            z-50
            mx-auto
            mb-16
          "
        >
          <div class="text-center">
            <lottie-player
            class="mx-auto"
              src="https://assets7.lottiefiles.com/private_files/lf30_yo2zavgg.json"
              background="transparent"
              speed="1"
              style="width: 200px; height: 160px"
              autoplay
            ></lottie-player>

            <h3 class="text-3xl mb-4 text-center">Parabéns, <NomeAluno />!</h3>

            <p class="text-center text-lg">
              Você concluiu a
              <span class="font-bold"
                >Aula {{ numeroAula }} - {{ nomeAula }}</span
              >.
            </p>

            <router-link :to="linkContinuar">
              <button
                class="
                  bg-primary-color
                  w-full
                  md:w-52
                  h-14
                  rounded-lg
                  text-white
                  transform
                  hover:-translate-y-1
                  transition-all
                  shadow
                  mx-auto
                  mt-12
                "
              >
                Continuar
              </button>
            </router-link>
          </div>
          <a
            class="
              absolute
              -top-3
              -right-3
              rounded-full
              cursor-pointer
              bg-red-500
              px-4
              py-2
              text-white
              font-bold
            "
            @click="cliqueFora"
            >X</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ModalAulaCompleta",
  props: ["numeroAula", "nomeAula", "linkContinuar"],
  data() {
    return {};
  },
  methods: {
    cliqueFora({ currentTarget, target }) {
      if (currentTarget === target) {
        this.$store.state.modalAulaCompleta = false;
      }
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
