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
        <h3 class="font-medium text-primary-color text-xl mb-5">
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
                >Ocorre devido a materiais químicos estranhos ou toxinas produzidos pelos microrganismos tais como: agrotóxicos, materiais de limpeza, metais pesados.</span
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
                >Se dá por meio de contaminação por objetos durante o preparo de alimentos pode ser: pregos, saco plástico, palito de dente, brincos, etc. </span
              >
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
                >Ocasionada pela contaminação de microorganismos como bactérias, fungos, parasitas e vírus.</span
              >
            </template>
          </accordion-item>
        </accordion>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">

        <h3 class="font-medium text-primary-color text-xl mb-5">1.3 Higiene do manipulador de alimentos</h3>

        <p>
          Para um alimento seguro é preciso que o manipulador de alimentos tenha certos cuidados com sua higiene pessoal. Mas, o que deve ser feito?
        </p>

        <ul class="lista-check">
          <div class="ml-0 md:ml-7">
            <li>
              Manter as mãos sempre limpas antes e depois de produzir o alimento;
            </li>

            <li>
              Usar sempre o cabelo preso e na touca;
            </li>

            <li>
              Unhas limpas e sempre cortadas;
            </li>

            <li>
              Não usar maquiagem e nem adornos (brincos, colar, anel, pulseiras, relógio);
            </li>

            <li>
              Roupas adequadas e limpas;
            </li>

            <li>
              Barba sempre aparada;
            </li>

            <li>
              Não tossir, espirrar e cantar próximo ao alimento.
            </li>
          </div>
        </ul>
      </div>

      <div class="bg-white p-8 rounded-lg shadow my-5">

        <h3 class="font-medium text-primary-color text-xl mb-5">1.4 Como lavar as mãos?</h3>

        <p>
          Alguns passos devem ser seguidos para garantir que as mãos sejam lavadas de forma correta.
        </p>

        <ul class="lista-check">
          <div class="ml-0 md:ml-7">
            <li>
              Utilize a água corrente e limpa nas mãos; 
            </li>

            <li>
              Esfregue a palma e o dorso das mãos com sabonete de preferência sem cheiro, inclusive as unhas e os espaços entre os dedos e também os punhos de ambas as mãos;
            </li>

            <li>
              Enxágue bem com água corrente retirando todo o sabonete;
            </li>

            <li>
              Seque-as com papel toalha ou toalha limpa; 
            </li>

            <li>
              Finalizar com um produto anti séptico pode ser álcool em gel ou líquido.
            </li>
          </div>
        </ul>
      </div>

      <BoxTips :icone="'bookmark'">
        <template v-slot:titulo>Lembrete</template>
        <template v-slot:conteudo>O Cuidado é muito importante para garantir um bom produto e assim fidelizar seus clientes.</template>
      </BoxTips>
      

      <div class="flex justify-around mt-12">
        <router-link to="/aula-01">
          <NavButton :icone="'arrow-left'"></NavButton>
        </router-link>

        <router-link to="/aula-01/topico-02">
          <NavButton :icone="'arrow-right'"></NavButton>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton.vue";
import Accordion from "@/components/accordion/Accordion.vue";
import AccordionItem from "@/components/accordion/AccordionItem.vue";
import BoxTips from "@/components/BoxTips.vue";

export default {
  title: "Aula 01 - Tópico 01",
  components: { NavButton, Accordion, AccordionItem, BoxTips },

  created() {},
};
</script>
