<template>
  <div id="app" class="bg-gray-200 font-poppins pb-10">
    <Navbar />
    <div class="pt-10">
      <transition mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
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

<script></script>
