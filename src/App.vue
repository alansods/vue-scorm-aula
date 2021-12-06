<template>
  <div id="app" class="bg-gray-200 font-poppins pb-10 text-dark-color">
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
  overflow-x: hidden;
}

p:not(:first-of-type):not(:last-of-type) {
  margin: 1rem 0 !important
}

.v-enter,
.v-leave-to {
  transform: translate3d(0, -20px, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

/* SCROLLBAR STYLE */
/* width */
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c5ccd3;
  border-radius: 100vh;
  border: 3px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>

<script>
export default {

}
</script>
