<template>
  <li class="accordion__item">
    <div 
      class="accordion__trigger"
      :class="{'accordion__trigger_active': visible}"
      @click="open">

      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
      <v-icon class="fill-current" :class="{'arrowOpened': visible}" name="chevron-down" />
    </div>

    <transition 
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end">

      <div class="accordion__content"
        v-show="visible">
        <ul>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>


<script>
export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null,
      arrowOpened: false
    };
  },
  computed: {
    visible() {
      return this.index === this.Accordion.active;
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
        this.arrowOpened = !this.arrowOpened;
      } else {
        this.Accordion.active = this.index;
        this.arrowOpened = !this.arrowOpened;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    }
  },
  created() {
    this.index = this.Accordion.count++;
  }
};
</script>

<style scoped>
.accordion__item {
  position: relative;
  padding: 5px 0;
}

ul{
  background: #3f51b523;
  padding: 20px 30px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ddd;
  color: #333;
  padding: 10px 15px;
  font-weight: medium;
  cursor: pointer;
  border-radius: 5px;
  transition: all .2s;
}

.accordion__trigger:hover{
  background: #3F51B5;
  color: #fff;
}


.arrowOpened {
  transform: rotateZ(90deg);
  fill: #fff;
}

.accordion__trigger_active {
  background: #3F51B5;
  color: white;
}

/* .accordion__content ul {
  margin: 10px 15px 0 15px;
} */

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
