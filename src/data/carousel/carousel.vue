<template>
  <div class="v-carousel" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="v-carousel-window">
      <div class="v-carousel-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="v-carousel-dots">
      <span v-for="n in childrenLength" :key="'index_' + n" :class="{active : selectedIndex === n-1}" @click="select(n-1)">
        {{n}}
      </span>
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
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined
    }
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected) || 0
    },
    names() {
      return this.$children.map(vm => vm.name)
    }
  },
  mounted() {
    this.updatedChildren()
    this.playAutomatically()
    this.childrenLength = this.$children.length
  },
  updated() {
    this.updatedChildren()
  },
  methods: {
    playAutomatically() {
      // 防止重复播放
      if (this.timerId) { return }
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        if (newIndex === -1) { newIndex = this.names.length + 1 }
        if (newIndex === this.names.length) { newIndex = 0 }
        this.select(newIndex) // 告诉外界选中 newIndex
        this.timerId = setTimeout(run, 2000)
      }
      this.timerId = setTimeout(run, 2000)
    },
    pause() {
      window.clearTimeout(this.timerId)
      this.timerId = undefined
    },
    onMouseEnter() {
      this.pause()
    },
    onMouseLeave() {
      this.playAutomatically()
    },
    getSelected() {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updatedChildren() {
      this.$children.forEach(vm => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        if (this.lastSelectedIndex === this.$children.length -1 && this.selectedIndex === 0) {
          reverse = false
        }
        if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1 ) {
          reverse = true
        }
        vm.reverse = reverse
        this.$nextTick(() => {
          vm.selected = this.getSelected()
        })
      })
    },
    select(index) {
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[index])
    }
  }
}
</script>

<style scoped lang="scss">
.v-carousel {
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    > span {
      &.active {
        background: red;
      }
    }
  }
}
</style>
