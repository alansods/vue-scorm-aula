<template>
  <div id="aula-01">
    <div
      id="corpo"
      class="w-full px-3 xl:px-0 xl:max-w-screen-lg xl:mx-auto mt-16"
    >
      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3>Arroz Doce</h3>

        <h3>Equipamento e utensílios</h3>

        <ul>
          <li>fogão</li>
          <li>balança xicara medidora</li>
          <li>panela</li>
          <li>espátula</li>
          <li>bowl</li>
        </ul>
        
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3>Ingredientes</h3>

        <ul>
          <li>1 xícara de arroz (175g)</li>
          <li>1/3 de xícara de açúcar (65g)</li>
          <li>3 cravos da índia</li>
          <li>1 canela em pau</li>
          <li>2 xícaras de água (420g)</li>
          <li>3 xícaras de leite (648g)</li>
          <li>½ caixa de leite condensado(198g)</li>
          <li>1 xícara de creme de leite (200g)</li>
          <li>Casca de 1 laranja</li>
          <li>Sal a gosto</li>
        </ul>
        
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3>Modo de preparo</h3>

        <p>
          Em uma panela de fundo grosso adicione todos os ingredientes exceto o leite condensado e creme de leite e leve ao fogo mexendo de vez em quando para que não grude no fundo da panela.  Após 20 minutos, acrescente o leite condensado e deixe cozinhar por mais 5 min, e para finalizar acrescente o creme de leite, mexa bem. O arroz deve ficar meio líquido, não tem problema pois depois de esfriar ele ganha consistência.
        </p>
        
        <p>
          Após esta pronto coloque o arroz doce em um bowl, para evitar que crie uma crosta no seu arroz cubra com plástico filme tocando diretamente no seu doce, você pode deixar esfriando em temperatura ambiente ou levar para geladeira por 3hs.
        </p>

      </div>

      <div class="flex justify-around mt-12">
        <router-link to="/aula-03">
          <NavButton :icone="'arrow-left'"></NavButton>
        </router-link>

        <button
          class="bg-gray-300 py-3 px-4 rounded-lg text-white cursor-not-allowed"
        >
          <v-icon class="icone-setas" name="arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton";

export default {
  title: "Aula 03 - Receitas: Arroz Doce",
  components: { NavButton },
  data() {
    return {};
  },
  created() {
    this.$store.commit("ESTA_NA_AULA_APRESENTACAO", false);
    this.$store.commit("ESTA_NA_AULA_1", false);
    this.$store.commit("ESTA_NA_AULA_2", false);
    this.$store.commit("ESTA_NA_AULA_3", true);
    this.$store.commit("SALVAR_LOCAL_STORAGE");
  },
};
</script>

<style scoped>
.container-receitas {
  display: flex;
  gap: 30px 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.receita-item {
  background: #fff;
  border-radius: 10px;
  flex-grow: 1;
  position: relative;
  cursor: pointer;
  transition: transform 150ms ease-in-out;
}

.receita-item:hover {
  transform: scale(1.05);
}

.container-img {
  background: rgba(0, 0, 0, 0.329);
  width: 100%;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.container-img img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.container-img h2 {
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
}

.bg-titulo-receita {
  background: rgba(0, 0, 0, 0.473);
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.container-icones {
  display: flex;
  gap: 10px;
  padding: 12px;
  justify-content: space-around;
}

.icone {
  display: flex;
  justify-content: center;
}

.icone span {
  font-size: 0.8rem;
}

.icone img {
  width: auto;
  height: 17px;
  margin-right: 5px;
}

@media (max-width: 600px) {
  .container-receitas {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
    flex-wrap: nowrap;
    justify-content: center;
  }

  .receita-item {
    width: 100%;
  }
}
</style>
