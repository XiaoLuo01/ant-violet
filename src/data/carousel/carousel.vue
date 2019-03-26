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
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    this.updatedChildren()
    this.playAutomatically()
  },
  updated() {
    this.updatedChildren()
  },
  methods: {
    playAutomatically() {
      const names = this.$children.map(vm => vm.name)
      let index = names.indexOf(this.getSelected())
      let run = () => {
        if (index === names.length) { index = 0 }
        this.$emit('update:selected', names[index + 1])
        index++
        setTimeout(run, 2000)
      }
      setTimeout(run, 2000)
    },
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updatedChildren() {
      this.$children.forEach(vm => {
        vm.selected = this.getSelected()
      })
    }
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
