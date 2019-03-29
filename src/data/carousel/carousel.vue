<template>
  <div class="v-carousel" 
  @mouseenter="onMouseEnter" 
  @mouseleave="onMouseLeave"
  @touchstart="onTouchStart"
  @touchmove="onTouchMove"
  @touchend="onTouchEnd">
    <div class="v-carousel-window">
      <div class="v-carousel-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="v-carousel-dots">
      <span v-for="n in childrenLength" :key="'index_' + n" :class="{active : selectedIndex === n-1}" @click="select(n-1)"></span>
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
      timerId: undefined,
      startTouch: undefined
    }
  },
  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected)
      return index === -1 ? 0:index
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
    onTouchStart(e) {
      this.pause()
      if (e.touches.length > 1) { return }
      this.startTouch = e.touches[0]
    },
    onTouchMove(e) {

    },
    onTouchEnd(e) {
      let endTouch = e.changedTouches[0]
      let {clientX:x1, clientY:y1} = this.startTouch
      let {clientX:x2, clientY:y2} = endTouch

      let distance = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
      let deltaY = Math.abs(y2-y1)
      let rate = distance / deltaY
      if (rate > 2) {
        if (x2 < x1) {
          this.select(this.selectedIndex + 1)
        } else {
          this.select(this.selectedIndex - 1)
        }
      }

      this.playAutomatically()
    },
    updatedChildren() {
      this.$children.forEach(vm => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        if (this.timerId) {
            if (this.lastSelectedIndex === this.$children.length -1 && this.selectedIndex === 0) {
            reverse = false
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1 ) {
            reverse = true
          }
        }
        vm.reverse = reverse
        this.$nextTick(() => {
          vm.selected = this.getSelected()
        })
      })
    },
    select(newIndex) {
      if (newIndex === -1) { newIndex = this.names.length - 1 }
      if (newIndex === this.names.length) { newIndex = 0 }
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[newIndex])
    }
  }
}
</script>

<style scoped lang="scss">
.v-carousel {
  position: relative;
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    > span {
      width: 10px;
      height: 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #fff;
      margin: 0 4px;
      cursor: pointer;
      &.active {
        background: #99a9bf;
      }
    }
  }
}
</style>
