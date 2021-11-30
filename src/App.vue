<template>
  <div id="app" class="bg-gray-200 font-poppins">
    <Navbar />
    <div>
      <transition mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style>

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
