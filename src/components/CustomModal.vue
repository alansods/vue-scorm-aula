<template>
  <div>
    <button @click="CustomModalAtivo = !CustomModalAtivo"><slot name="nomeBotao"></slot></button>

    <transition name="CustomModal">
      <div class="CustomModal-wrapper" v-show="CustomModalAtivo" @click="cliqueFora">
        <div class="CustomModal">
          <slot name="conteudo"></slot>
          <a class="fechar" @click="CustomModalAtivo = !CustomModalAtivo">x</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CustomModal",
  data() {
    return {
      CustomModalAtivo: false,
    };
  },
  methods: {
    cliqueFora({ currentTarget, target }) {
      if (currentTarget === target) this.CustomModalAtivo = false;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

h1 {
  margin: 0 0 20px 0;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
button {
  width: 100%;
  border: 2px solid rgb(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 15px 10px;
  font-size: 1rem;
  margin-bottom: 20px;
}

input[type="submit"],
button {
  width: 200px;
  background: #84e;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s;
}

input[type="submit"]:active,
button:active {
  background: #94e;
}

input[type="submit"]:hover,
button:hover {
  transform: scale(1.05);
}

button {
  margin: 20px auto;
  display: block;
}

a.fechar {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  background: #aaa;
  color: #333;
  padding: 3px 9px;
  cursor: pointer;
  border-radius: 2px;
}

a.fechar:hover {
  transform: scale(1.1);
}

a.fechar:active {
  background: rgb(187, 187, 187);
}

.CustomModal-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.4);
  overflow-y: scroll;
}

.CustomModal {
  position: relative;
  background: #e5e5e5;
  padding: 50px;
  border-radius: 4px;
  max-width: 400px;
  margin: 120px auto 0 auto;
  z-index: 10;
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
