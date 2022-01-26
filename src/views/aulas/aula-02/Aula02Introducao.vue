<template>
  <div id="aula-01">
    <div
      id="container-bg-video"
      class="
        bg-video-apresentacao bg-cover
        h-1/4
        px-4
        xl:px-0
        mx-auto
        text-white
      "
    >
      <div
        id="container-all-content-bg-video"
        class="
          w-full
          xl:max-w-screen-lg
          mx-auto
          flex flex-col
          xl:flex-row xl:items-center
          pt-12
          xl:pt-7 xl:pb-5
        "
      >
        <div id="titulo-curso" class="xl:w-3/4 text-left">
          <h2 class="text-3xl xl:text-4xl font-bold shadow-sm">
            Aula {{ $store.state.aulas[1].numeroAula }}
          </h2>
          <h3 class="text-2xl xl:text-3xl font-medium shadow-sm">
            {{ $store.state.aulas[1].nomeAula }}
          </h3>
          <p class="mt-2 2xl:w-2/3 font-light">
            {{ $store.state.aulas[1].descricaoAula }}
          </p>
        </div>

        <div
          id="container-video-apresentacao"
          class="w-full md:w-2/4 2xl:w-2/5 mx-auto my-12 xl:my-4"
        >
          <div id="video-apresentacao" class="aspect-w-16 aspect-h-9">
            <iframe
              class="border-white border-4 shadow-xl rounded-sm"
              src="https://www.youtube.com/embed/93wkCvje2ro"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-bold text-primary-color text-xl mb-5">Objetivos</h3>

        <ul class="lista-check">
          <div class="ml-0 md:ml-7">
            <li>Conhecer os utensílios.</li>

            <li>Entender sua aplicabilidade nas receitas.</li>
          </div>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-medium text-primary-color text-xl mb-5">
          Conhecendo os utensílios
        </h3>

        <p>
          Os utensílios são de extrema importância na hora da produção, pois
          eles irão auxiliar no processo de fabricação dos doces.
        </p>

        <p>
          Para que seja feita a produção dos doces será necessário o uso de
          alguns utensílios que iremos apresentar:
        </p>
      </div>

      <div class="grid">
        <div class="item">
          <a href="#0" aria-labelledby="person1"></a>
          <img
            src="@/assets/img/fouet.jpg"
          />
          <div class="item__overlay">
            <h3 id="person1" aria-hidden="true">fouet</h3>
            <div class="item__body">
              <p>
                Utilizado para mexer molhos e cremes também ajuda a dissolver
                pelotas indesejadas.
              </p>
            </div>
          </div>
        </div>
        <div class="item">
          <a href="#0" aria-labelledby="person2"></a>
          <img
            src="https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt=""
          />
          <div class="item__overlay">
            <h3 id="person2" aria-hidden="true">Person 2</h3>
            <div class="item__body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div class="item">
          <a href="#0" aria-labelledby="person3"></a>
          <img
            src="https://images.unsplash.com/photo-1590424744257-fdb03ed78ae0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt=""
          />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Person 3</h3>
            <div class="item__body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-around mt-12">
        <router-link to="/">
          <NavButton :icone="'arrow-left'"></NavButton>
        </router-link>

        <router-link to="/aula-01/topico-01">
          <NavButton :icone="'arrow-right'"></NavButton>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton";

export default {
  title: "Aula 01",
  components: { NavButton },
  created() {
    this.$store.commit("ESTA_NA_AULA_APRESENTACAO", false);
    this.$store.commit("ESTA_NA_AULA_2", true);
    this.$store.commit("SALVAR_LOCAL_STORAGE");
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 17rem);
  gap: 2rem;
}

.item {
  position: relative;
  height: 19rem;
  background-color: lightGrey;
  overflow-y: hidden;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.1);
}

.item h3 {
  margin: 0;
  display: block;
  background-color: #3F51B5;
  color: white;
  padding: 1rem;
}

.item a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.item a:hover ~.item__overlay,
a:focus ~.item__overlay {
  transform: translate3d(0, 0, 0);
}

img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.item__overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  transition: transform 300ms;
  background-color: #ddd;
  transform: translate3d(0, calc(100% - 3.5rem), 0);
}

.item__body {
  flex-grow: 1;
  padding: 1rem;
}
.item__body p {
  margin: 0;
}
</style>
