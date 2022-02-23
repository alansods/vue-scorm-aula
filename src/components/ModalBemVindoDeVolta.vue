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
            md:w-auto
            block
            relative
            z-50
            mx-auto
            mb-16
            md:mb-0
            text-center
          "
        >
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_34RWGs.json"
            background="transparent"
            speed="1"
            style="width: 220px; height: 220px; margin: 0 auto"
            loop
            autoplay
          ></lottie-player>
          <h3 class="text-xl text-primary-color mt-4"><span class="text-2xl font-bold"> Olá!</span> <br/> Bem-vindo(a) de volta <NomeAluno />.</h3>
          <hr class="my-3">
          <p>
            Você parou na <span class="font-bold">{{$route.name}}.</span>
            <br>
            Continue seus estudos para avançar cada vez mais! 😄
          </p>
          <a
            class="
              absolute
              -top-3
              -right-3
              rounded-full
              cursor-pointer
              bg-red-500
              hover:bg-red-400
              h-10
              w-10
              leading-none
              flex
              items-center
              justify-center
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
