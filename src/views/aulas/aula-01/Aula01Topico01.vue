<template>
  <div id="aula-01-topico-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <div class="flex bg-white mb-10 items-center rounded-lg shadow">
        <div class="bg-primary-color flex items-center text-xl uppercase px-8 py-5 text-white font-bold rounded-l-lg">
          <v-icon class="mr-2" scale="1.5" name="book-open" />
          Aula {{ $store.state.aulas[0].numeroAula }}
          </div>
        <div class="flex-1 pl-5 text-xl font-bold text-primary-color">Tópico {{ $store.state.topicosAula_01[0].numeroTopico }} - {{ $store.state.topicosAula_01[0].nome }}</div>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-bold text-primary-color text-xl mb-5">
          1.1 Nome do Tópico
        </h3>
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
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-bold text-primary-color text-xl mb-5">
          1.1 Nome do Tópico
        </h3>
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
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-bold text-primary-color text-xl mb-5">
          1.1 Nome do Tópico
        </h3>
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
      </div>

      
    </div>
    <FixedNav />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
