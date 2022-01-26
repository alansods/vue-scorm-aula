<template>
  <div id="aula-01-topico-01">
    <ModalAulaCompleta />
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-10"
    >
      <div class="xl:flex bg-white mb-5 items-center rounded-lg shadow">
        <div
          class="
            bg-primary-color
            flex
            justify-center
            xl:justify-start
            items-center
            text-xl
            uppercase
            px-6
            py-2
            xl:py-4
            text-white
            font-bold
            rounded-t-lg
            xl:rounded-tr-none xl:rounded-l-lg
          "
        >
          <v-icon class="mr-2" scale="1.5" name="book-open" />
          Aula {{ $store.state.aulas[0].numeroAula }}
        </div>
        <div
          class="
            flex-1
            px-3
            text-center
            xl:text-left xl:pl-5
            py-2
            text-xl
            font-bold
            text-primary-color
          "
        >
          Tópico {{ $store.state.topicosAula_01[0].numeroTopico }} -
          {{ $store.state.topicosAula_01[0].nome }}
        </div>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-bold text-primary-color text-xl mb-5">
          1.2 Contaminação Química, física e biológica
        </h3>

        <p>
          Ao manipular o alimento é necessário muita atenção, pois por descuido ou por não seguir as boas práticas de forma correta pode acarretar em alguma contaminação.
        </p>

        <p>
          A contaminação dos alimentos se dá por vários fatores, iremos abordar aqui alguns deles.

        </p>
        
      </div>

      <BoxTips />

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <figure class="max-h-xs max-w-xs xl:float-left xl:mr-5 xl:mb-0 mb-5">
          <img
            class="object-cover rounded-md"
            src="@/assets/img/dog.jpg"
            alt="Cachorro Feliz"
          />
          <figcaption class="text-xs text-gray-300 mt-1">
            Figura 1: Cachorro Feliz
          </figcaption>
        </figure>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          .
        </p>

      </div>
      <button class="bg-primary-color p-3" @click="$store.commit('COMPLETAR_AULA')">Clique</button>
    </div>
    
  </div>
</template>

<script>
import ModalAulaCompleta from '@/components/ModalAulaCompleta.vue';

export default {
  title: "Aula 01 - Tópico 02",
  components: { ModalAulaCompleta },

  created() {

  },

};
</script>

