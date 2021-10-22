<template>
  <div id="app" class="bg-gray-200">
    <header-principal/>
    <div class="sm:w-full xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto py-10">
      <transition mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style>
body {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
}

.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>

<script>
</script>
