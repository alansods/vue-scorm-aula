<template>
  <router-link :to="topico.link">
    <div class="
          flex
          justify-center
          items-center
          bg-white
          rounded-lg
          shadow
          my-7
          cursor-pointer
          transform
          xl:hover:translate-x-2.5
          transition-all
        ">
      <div
        id="container-left"
        class="
          bg-primary-color
          w-20
          text-center
          py-5
          text-white
          font-bold
          text-2xl
          rounded-l-lg
        "
      >
        {{ topico.numeroTopico }}
      </div>

      <div id="container-middle" class="flex-1 pl-5">
        <div class="font-bold text-xl">Tópico {{ topico.numeroTopico }}</div>
        <div>{{ topico.nome }}</div>
      </div>

      <div id="container-right" class="pr-5 text-primary-color">
        <v-icon scale="2" name="sign-in-alt" />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["topico"],
};
</script>

<style></style>
