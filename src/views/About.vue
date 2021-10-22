<template>
  <div class="about">

    <h1>Sobre</h1>
    <CustomModal>
      <template v-slot:nomeBotao> CustomModal 1 </template>
      <template v-slot:conteudo>
        <h1>Cadastre-se</h1>
        <form>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
          <label for="password">Senha</label>
          <input type="password" name="password" id="password" />
          <input type="submit" value="Logar" />
        </form>
      </template>
    </CustomModal>

    <CustomModal>
      <template v-slot:nomeBotao>Clique 2</template>
      <template v-slot:conteudo>
        <h1>CustomModal 2</h1>
        <p>Aqui seria o CustomModal 2.</p>
      </template>
    </CustomModal>

  </div>
</template>

<script>
</script>
