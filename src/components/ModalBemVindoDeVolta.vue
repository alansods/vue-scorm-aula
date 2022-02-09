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
        "
      >
        <div
          class="
            modal
            p-10
            bg-white
            rounded-xl
            w-2/4
            relative
            z-50
            mx-auto
            mt-32
          "
        >
          <slot name="conteudo"></slot>
          <h3>Olá. Bem-vindo de volta!</h3>
          <p>
            Você parou na aula {{$route.name}}
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
