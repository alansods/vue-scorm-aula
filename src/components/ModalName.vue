<template>
  <div>
    <transition name="CustomModal">
      <div class="CustomModal-wrapper" v-show="$store.state.modalNome === true">
        <div
          class="
            CustomModal
            flex flex-col
            items-center
            justify-center
            rounded-lg
          "
        >
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_34RWGs.json"
            background="transparent"
            speed="1"
            style="width: 200px; height: 200px"
            loop
            autoplay
          ></lottie-player>

          <h3 v-if="!$store.state.temNome" class="text-center"><span class="font-bold text-lg">Olá!</span> <br />Qual é seu nome?</h3>
          
          <h3 v-if="$store.state.temNome" class="text-center"><span class="font-bold text-lg">Olá!</span> <br />Deseja alterar seu nome?</h3>

          <input
            ref="nameInput"
            placeholder="Digite seu nome"
            class="my-6 rounded text-center shadow-lg w-full"
            v-model="$store.state.aluno"
            type="text"
            @keyup.enter="$store.commit('SALVAR_NOME')"
          />
          <button
            class="rounded px-5 py-3 w-full text-white outline-none"
            :class="inativo ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary-color'"
            @click="$store.commit('SALVAR_NOME')"
          >
            Confirmar
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ModalName",
  data() {
    return {
      inativo: null
    };
  },
  computed: {
    nomeAluno(){
      return this.$store.state.aluno
    },
  },
  watch: {
    nomeAluno(){
      if(this.nomeAluno.length >= 3){
        this.inativo = false
      } else{
        this.inativo = true
      }
    }
    
  },
  updated() {
    const labelInputRef = this.$refs.nameInput;
    labelInputRef.focus();
  },
  mounted() {
    const labelInputRef = this.$refs.nameInput;
    labelInputRef.focus();
  },
};
</script>

<style scoped>
.CustomModal-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.8);
  overflow-y: scroll;
  z-index: 50;
  padding: 0 30px
}

.CustomModal {
  position: relative;
  background: #fff;
  padding: 25px 50px;
  max-width: 400px;
  margin: 70px auto 0 auto;
  z-index: 60;
}

.CustomModal-enter,
.CustomModal-leave-to {
  opacity: 0;
}

.CustomModal-enter-active,
.CustomModal-leave-to {
  transition: opacity 0.3s;
}

.CustomModal-enter-to .CustomModal {
  animation: slide 0.3s;
}

.CustomModal-leave-to .CustomModal {
  animation: slide 0.3s reverse;
}


@keyframes slide {
  from {
    transform: translate3d(0, -40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>
