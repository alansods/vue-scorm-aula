<template>
  <div>
    <transition>
      <div
        v-show="$store.state.bemVindoDeVolta === true"
        @click="cliqueFora"
        class="
          bg-black bg-opacity-70
          fixed
          w-screen
          h-screen
          top-0
          left-0
          overflow-y-scroll
          z-40
          flex flex-col
          items-center
          justify-center
        "
      >
        <div
          class="
            modal
            px-8
            py-8
            bg-white
            rounded-xl
            w-11/12
            md:w-3/6
            relative
            z-50
            mx-auto
            mb-16
            text-center
          "
        >
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_34RWGs.json"
            background="transparent"
            speed="1"
            style="width: 200px; height: 200px; margin: 0 auto"
            loop
            autoplay
          ></lottie-player>
          <h3 class="text-2xl text-primary-color mt-2 mb-5">Olá. Bem-vindo(a) de volta <NomeAluno />!</h3>
          <p>
            Você parou na <span class="font-bold">Aula {{$route.name}}.</span>
          </p>
          <p>
            Continue seus estudos para avançar cada vez mais! 😀
          </p>
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
            @click="$store.state.bemVindoDeVolta = false"
            >X</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    cliqueFora({ currentTarget, target }) {
      if (currentTarget === target) {
        this.$store.state.bemVindoDeVolta = false;
      }
    },
  },
};
</script>

<style scoped></style>
