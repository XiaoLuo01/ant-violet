<template>
  <transition name="carousel">
    <div class="v-carousel-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'vCarousel',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: undefined
    }
  },
  computed: {
    visible() {
      return this.selected === this.name
    }
  }
}
</script>

<style scoped lang="scss">
.carousel-leave-active {
  position: absolute;
  left: 0;
  top: 0;
}
.carousel-enter-active, .carousel-leave-active {
  transition: all 1s;
}
.carousel-enter {
  transform: translateX(100%);
}
.carousel-leave-to {
  transform: translateX(-100%);
}
</style>
