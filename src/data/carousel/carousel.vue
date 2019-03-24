<template>
  <div class="v-carousel">
    <div class="v-carousel-window">
      <div class="v-carousel-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vCarousel',
  props: {
    selected: {
      type: String
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    let first = this.$children[0]
    let second = this.$children[1]
    first.visible = true
    setTimeout(() => {
      first.visible = false
      second.visible = true
    }, 2000)
  }
}
</script>

<style scoped lang="scss">
.v-carousel {
  display: inline-block;
  overflow: hidden;
  &-wrapper {
    position: relative;
  }
}
</style>
