<template>
  <div class="apresentacao">
    <div id="top-overlay-video"></div>

    <video
      id="video-bg"
      src="assets/img/padrao/bg.mp4"
      autoplay
      loop
      playsinline
      muted
    ></video>

    <section class="container-apresentacao">
      <h1 id="titulo-apresentacao" class="mb-5">
        Instalação de Som Automotivo
      </h1>

      <div>
        <div class="video-responsivo-tamanho">
          <div class="video-responsivo video-box">
            <iframe
              src="https://www.youtube.com/embed/cX7h4wu_KB8"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <button
        class="btn-iniciar my-4"
        onclick="window.location.href='1.html'"
        type="button"
      >
        Clique aqui para começar
      </button>

      <small class="text-light fw-light">Senai - Ceará</small>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Apresentação",
  components: {},
};
</script>

<style scoped>
#top-overlay-video {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}

#video-bg {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -2;
  top: 0;
  left: 0;
}

.video-responsivo-tamanho {
  margin: 0 auto;
  max-width: 60%;
}

.video-responsivo {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.video-responsivo iframe,
.video-responsivo object,
.video-responsivo embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.container-apresentacao {
  z-index: 2;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

#titulo-apresentacao {
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-weight: 900;
  text-align: center;
  font-size: 2.7rem;
  display: inline-block;
}

.btn-iniciar {
  animation: BtInicioAnimado 2s infinite;
  font-size: 1.1rem;
  font-weight: 100;
  color: #fff;
  border: solid 1px #fff;
  border-radius: 4px;
  padding: 8px 20px;
  background: #e7b100;
  transition: animation 0.5s ease;
}

@keyframes BtInicioAnimado {
  0% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.05);
  }
  30% {
    transform: scale(1);
  }
  45% {
    transform: scale(1.05);
  }
  60% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
</style>