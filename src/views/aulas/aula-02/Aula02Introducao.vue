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
        <h3 class="font-semibold text-primary-color text-xl mb-5">Objetivos</h3>

        <ul class="lista-check">
          <div class="ml-0 md:ml-7">
            <li>Conhecer os utensílios.</li>

            <li>Entender sua aplicabilidade nas receitas.</li>
          </div>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-semibold text-primary-color text-xl mb-5">
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

      <div class="grid flex-col md:flex-row">
        <div class="item shadow">
          <a href="#0" aria-labelledby="person1"></a>
          <img
            src="@/assets/img/fouet.jpg"
          />
          <div class="item__overlay">
            <h3 id="person1" aria-hidden="true">Fouet</h3>
            <div class="item__body">
              <p>
                Utilizado para mexer molhos e cremes também ajuda a dissolver
                pelotas indesejadas.
              </p>
            </div>
          </div>
        </div>
        <div class="item shadow">
          <a href="#0" aria-labelledby="person2"></a>
          <img
            src="@/assets/img/espatula-de-silicone-pao-duro.jpg"
          />
          <div class="item__overlay">
            <h3 id="person2" aria-hidden="true">Espátula de silicone</h3>
            <div class="item__body">
              <p>
                Serve para mexer cremes e tirar bem todo o alimento contido em uma panela ou vasilha.
              </p>
            </div>
          </div>
        </div>
        <div class="item shadow">
          <a href="#0" aria-labelledby="person3"></a>
          <img
            src="@/assets/img/peneira.jpg"
          />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Peneira</h3>
            <div class="item__body">
              <p>
                Utilizada para peneirar os alimentos secos, tais como: farinha, fermento, açúcar, chocolate.
              </p>
            </div>
          </div>
        </div>
        <div class="item shadow">
          <a href="#0" aria-labelledby="person3"></a>
          <img
            src="@/assets/img/liquidificador.jpg"
          />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Liquidificador</h3>
            <div class="item__body">
              <p>
                Auxilia no preparo de algumas receitas misturando ou triturando o alimento.
              </p>
            </div>
          </div>
        </div>

        <div class="item shadow">
          <a href="#0" aria-labelledby="person3"></a>
          <img
            src="@/assets/img/panelas.jpg"
          />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Panelas</h3>
            <div class="item__body">
              <p>
                Utilizada para o cozimento dos alimentos.
              </p>
            </div>
          </div>
        </div>

        <div class="item shadow">
          <a href="#0" aria-labelledby="person3"></a>
          <img
            src="@/assets/img/balanca.jpg"
          />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Balança</h3>
            <div class="item__body">
              <p>
                Serve para pesar os alimentos, deixando a receita padronizada.
              </p>
            </div>
          </div>
        </div>

        <div class="item shadow">
          <a href="#0" aria-labelledby="person3"></a>
          <img
            src="@/assets/img/bowls-vasilha.jpg"
          />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Bowls (vasilha)</h3>
            <div class="item__body">
              <p>
                Utilizados para o preparo das receitas.
              </p>
            </div>
          </div>
        </div>

        <div class="item shadow">
          <a href="#0" aria-labelledby="person3"></a>
          <img
            src="@/assets/img/colher-de-polietileno.jpg"
          />
          <div class="item__overlay">
            <h3 id="person3" aria-hidden="true">Colher de polietinelo</h3>
            <div class="item__body">
              <p>
                Utilizado para mexer os alimentos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-around mt-12">
        <router-link to="/aula-01">
          <NavButton :icone="'arrow-left'"></NavButton>
        </router-link>

        <router-link to="/aula-03">
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
    this.$store.commit("ESTA_NA_AULA_1", false);
    this.$store.commit("ESTA_NA_AULA_2", true);
    this.$store.commit("ESTA_NA_AULA_3", false);
    this.$store.commit("SALVAR_LOCAL_STORAGE");
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.item {
  position: relative;
  height: 15rem;
  width: 240px;
  background-color: #fff;
  overflow-y: hidden;
  border-radius: 8px;
}

@media (max-width: 600px)
{
  .item
   {
    width: 100%;
   }
}

.item h3 {
  margin: 0;
  display: block;
  background-color: #eee;
  color: #444;
  padding: 1rem 1.5rem;
  font-weight: 500;
  text-align: center;
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
  object-fit: contain;
}

.item__overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  transition: transform 300ms ease-in-out;
  background-color: #fff;
  transform: translate3d(0, calc(100% - 3.5rem), 0);
}

.item__body {
  flex-grow: 1;
  padding: 1rem 1.5rem;
}
.item__body p {
  margin: 0;
}
</style>
