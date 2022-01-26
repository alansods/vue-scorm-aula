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
        <h3 class="font-medium text-primary-color text-xl mb-5">
          2.1 Boas práticas na fabricação de alimentos (BPF)
        </h3>

        <p>O que são boas práticas na manipulação de alimentos?</p>

        <p>
          As BPF’s são procedimentos obrigatórios, necessários para garantir a qualidade dos alimentos e a obtenção de produtos saudáveis. São etapas inter-relacionadas, aplicadas nos diversos segmentos do setor alimentício e em todas as fases do processo, desde a produção primária até a comercialização.
        </p>

        <p>
          O objetivo das BPF é assegurar que o produto esteja a salvo do risco de contaminação e seja preparado, manipulado e embalado sob condições sanitárias adequadas. Portanto, as principais importâncias da adoção das BPF’s são:
        </p>

        <ul>
          <li>
            O ambiente de trabalho torna-se mais agradável, limpo e seguro;
          </li>

          <li>
            Obtenção de maior motivação e produtividade;
          </li>

          <li>
            Aumento da satisfação do cliente com a qualidade relacionada com o padrão de higiene do produto e das operações de fabricação.
          </li>
        </ul>

        <Modal>
          <template v-slot:nomeBotao>Clique aqui</template>
          <template v-slot:conteudo>

            <h3 class="text-2xl font-bold mb-5">Esse é o titulo</h3>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, .
            </p>
          </template>
        </Modal>

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

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          .
        </p>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore.
        </p>
      </div>
      <button class="bg-primary-color p-3"
      @click="$store.commit('SHOW_MODAL_COMPLETAR_AULA_1', true)"
      @click.once="$store.commit('COMPLETAR_AULA_1')"
      >Clique</button>
    </div>
    
  </div>
</template>

<script>
import BoxTips from "@/components/BoxTips.vue";
import ModalAulaCompleta from '@/components/ModalAulaCompleta.vue';

export default {
  title: "Aula 01 - Tópico 01",
  components: { BoxTips, ModalAulaCompleta },

  created() {
    this.$store.commit("mostrarFixedMenu", true)
    this.$store.commit("ATUALIZAR_ANTERIOR", "/aula-01")
    this.$store.commit("ATUALIZAR_PROXIMO", "/aula-01/topico-02")
    this.$store.commit("ATUALIZAR_TOPICO_ATUAL", "1/4")
    this.$store.commit("ATUALIZAR_AULA_ATUAL", "1")
  },

};
</script>

<style>
