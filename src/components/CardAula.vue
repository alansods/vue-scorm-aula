<template>

  <div>
    <a href="#" class="card">
      <div class="overlay"></div>
      <h4><slot name="numeroAula"></slot></h4>
      <h3><slot name="tituloAula"></slot></h3>
      <small><font-awesome-icon icon="clock" />Carga horária: <slot name="cargaHoraria"></slot></small>
      <div class="conteudo"><p><slot name="conteudo"></slot></p></div>
    </a>
  </div>

</template>

<script>
export default {
  name: "Modal",
};
</script>

<style scoped>
.card {
  padding: 25px;
  width: 300px;
  height: auto;
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease-out;
  text-decoration: none;
}

.card:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px rgba(0, 0, 0, 0.11);
}

.card:active {
  transform: scale(1) translateZ(0);
  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11), 0 15px 24px rgba(0, 0, 0, 0.11);
}

.card p {
  font-size: 0.9rem;
  line-height: 1.3rem;
  margin: 20px 0 0 0;
  z-index: 1000;
  transition: color 0.3s ease-out;
  font-weight: normal;
  overflow: auto;
  text-overflow: ellipsis;
  height: 150px;
}

.card h3 {
  font-size: 1.15rem;
  font-weight: 700;
  text-align: center;
}

.card h4 {
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 5px;
}

.card h4::before,
.card h4::after {
  content: "-";
  margin: 0 10px;
}

small {
  font-weight: normal;
  font-size: 0.7rem;
  margin-top: 8px;
}

small svg {
  margin-right: 5px;
}
</style>