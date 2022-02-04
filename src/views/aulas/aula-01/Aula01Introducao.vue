<template>
  <div id="aula-01">

    <ModalAula01Completa
    :numeroAula="$store.state.aulas[0].numeroAula"
    :nomeAula="$store.state.aulas[0].nomeAula"
    :linkContinuar="$store.state.aulas[1].link"
    />

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
          <div class="flex items-center">
            <v-icon
              name="book-open"
              class="mr-2 text-xl xl:text-xl fill-current"
            />
            <h2 class="text-xl xl:text-xl font-light shadow-sm">
              Aula {{ $store.state.aulas[0].numeroAula }}
            </h2>
          </div>
          <h3 class="text-3xl xl:text-4xl font-bold shadow-sm mb-4">
            {{ $store.state.aulas[0].nomeAula }}
          </h3>
          <p class="mt-2 2xl:w-2/3 font-light">
            {{ $store.state.aulas[0].descricaoAula }}
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
        <div class="flex items-center">
          <IconeObjetivos />
          <h3 class="font-bold text-primary-color text-2xl">
            Objetivos
          </h3>
        </div>

        <ul class="lista-check">
          <div class="ml-0 md:ml-7">
            <li>
              Compreender a importância das boas práticas na manipulação de
              alimentos.
            </li>

            <li>
              Manusear de forma segura os alimentos desde a matéria prima até
              chegar à mão do cliente.
            </li>
          </div>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-semibold text-primary-color text-xl mb-5">
          1.1 Boas práticas na fabricação de alimentos (BPF)
        </h3>

        <p>O que são boas práticas na manipulação de alimentos?</p>

        <p>
          As BPF’s são procedimentos obrigatórios, necessários para garantir a
          qualidade dos alimentos e a obtenção de produtos saudáveis. São etapas
          inter-relacionadas, aplicadas nos diversos segmentos do setor
          alimentício e em todas as fases do processo, desde a produção primária
          até a comercialização.
        </p>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <p>
          O objetivo das BPF é assegurar que o produto esteja a salvo do risco
          de contaminação e seja preparado, manipulado e embalado sob condições
          sanitárias adequadas. Portanto, as principais importâncias da adoção
          das BPF’s são:
        </p>

        <ul class="lista-check">
          <div class="ml-0 md:ml-7">
            <li>
              O ambiente de trabalho torna-se mais agradável, limpo e seguro;
            </li>

            <li>Obtenção de maior motivação e produtividade;</li>

            <li>
              Aumento da satisfação do cliente com a qualidade relacionada com o
              padrão de higiene do produto e das operações de fabricação.
            </li>
          </div>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-semibold text-primary-color text-xl mb-5">
          1.2 Contaminação Química, física e biológica
        </h3>

        <p>
          Ao manipular o alimento é necessário muita atenção, pois por descuido
          ou por não seguir as boas práticas de forma correta pode acarretar em
          alguma contaminação.
        </p>

        <p>
          A contaminação dos alimentos se dá por vários fatores, iremos abordar
          aqui alguns deles.
        </p>

        <accordion>
          <accordion-item>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <template slot="accordion-trigger">
              <h3>Contaminação química</h3>
            </template>
            <!-- This slot will handle all the content that is passed to the accordion -->
            <template slot="accordion-content">
              <span
                >Ocorre devido a materiais químicos estranhos ou toxinas
                produzidos pelos microrganismos tais como: agrotóxicos,
                materiais de limpeza, metais pesados.</span
              >
            </template>
          </accordion-item>

          <accordion-item>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <template slot="accordion-trigger">
              <h3>Contaminação física</h3>
            </template>
            <!-- This slot will handle all the content that is passed to the accordion -->
            <template slot="accordion-content">
              <span
                >Se dá por meio de contaminação por objetos durante o preparo de
                alimentos pode ser: pregos, saco plástico, palito de dente,
                brincos, etc.
              </span>
            </template>
          </accordion-item>

          <accordion-item>
            <!-- This slot will handle the title/header of the accordion and is the part you click on -->
            <template slot="accordion-trigger">
              <h3>Contaminação biológica</h3>
            </template>
            <!-- This slot will handle all the content that is passed to the accordion -->
            <template slot="accordion-content">
              <span
                >Ocasionada pela contaminação de microorganismos como bactérias,
                fungos, parasitas e vírus.</span
              >
            </template>
          </accordion-item>
        </accordion>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-semibold text-primary-color text-xl mb-5">
          1.3 Higiene do manipulador de alimentos
        </h3>

        <p>
          Para um alimento seguro é preciso que o manipulador de alimentos tenha
          certos cuidados com sua higiene pessoal. Mas, o que deve ser feito?
        </p>

        <ul class="lista-check">
          <div class="ml-0 md:ml-7">
            <li>
              Manter as mãos sempre limpas antes e depois de produzir o
              alimento;
            </li>

            <li>Usar sempre o cabelo preso e na touca;</li>

            <li>Unhas limpas e sempre cortadas;</li>

            <li>
              Não usar maquiagem e nem adornos (brincos, colar, anel, pulseiras,
              relógio);
            </li>

            <li>Roupas adequadas e limpas;</li>

            <li>Barba sempre aparada;</li>

            <li>Não tossir, espirrar e cantar próximo ao alimento.</li>
          </div>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">
        <h3 class="font-semibold text-primary-color text-xl mb-5">
          1.4 Como lavar as mãos?
        </h3>

        <p>
          Alguns passos devem ser seguidos para garantir que as mãos sejam
          lavadas de forma correta.
        </p>

        <ul class="lista-check">
          <div class="ml-0 md:ml-7">
            <li>Utilize a água corrente e limpa nas mãos;</li>

            <li>
              Esfregue a palma e o dorso das mãos com sabonete de preferência
              sem cheiro, inclusive as unhas e os espaços entre os dedos e
              também os punhos de ambas as mãos;
            </li>

            <li>Enxágue bem com água corrente retirando todo o sabonete;</li>

            <li>Seque-as com papel toalha ou toalha limpa;</li>

            <li>
              Finalizar com um produto anti séptico pode ser álcool em gel ou
              líquido.
            </li>
          </div>
        </ul>
      </div>

      <BoxTips :icone="'bookmark'">
        <template v-slot:titulo>Lembrete</template>
        <template v-slot:conteudo
          >O Cuidado é muito importante para garantir um bom produto e assim
          fidelizar seus clientes.</template
        >
      </BoxTips>

      <div class="flex justify-around mt-12">
        <router-link to="/">
          <NavButton :icone="'arrow-left'"></NavButton>
        </router-link>

        <div @click="$store.dispatch('finalizarAula01')">
          <NavButton :icone="'arrow-right'"></NavButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton";
import Accordion from "@/components/accordion/Accordion.vue";
import AccordionItem from "@/components/accordion/AccordionItem.vue";
import BoxTips from "@/components/BoxTips.vue";

export default {
  title: "Aula 01",
  components: {
    NavButton,
    Accordion,
    AccordionItem,
    BoxTips,
  },
  created() {
    this.$store.commit("ESTA_NA_AULA_APRESENTACAO", false);
    this.$store.commit("ESTA_NA_AULA_1", true);
    this.$store.commit("ESTA_NA_AULA_2", false);
    this.$store.commit("ESTA_NA_AULA_3", false);
    this.$store.commit("SALVAR_LOCAL_STORAGE");
    this.$store.state.modalAulaCompleta = false;
    
  },
};
</script>

<style></style>
