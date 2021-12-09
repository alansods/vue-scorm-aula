<template>
  <div id="aula-01-topico-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <div class="xl:flex bg-white mb-10 items-center rounded-lg shadow">
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
        <div class="flex justify-center items-center flex-col">
          

          <lottie-player
            src="https://assets7.lottiefiles.com/private_files/lf30_yo2zavgg.json"
            background="transparent"
            speed="1"
            style="width: 200px; height: 200px"
            autoplay
          ></lottie-player>

          <h3 class="font-bold  text-primary-color text-2xl mb-5">
            Parabéns, <span class="font-bold">{{ $store.state.aluno }}</span
            >!
          </h3>

          <p class="text-center">
            Você concluiu a aula {{ $store.state.aulas[0].nomeAula }}.
            <br />Deseja
            avançar para a próxima aula ou voltar e revisar o conteúdo?
          </p>

          <div class="flex justify-evenly mt-10">
            <button class="bg-gray-400 px-5 py-2 rounded-lg text-gray-200 mx-2 transform hover:-translate-y-1 shadow transition-all">Voltar</button>
            <button class="bg-primary-color px-5 py-2 rounded-lg text-white mx-2 transform hover:-translate-y-1 shadow transition-all">Sim</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
