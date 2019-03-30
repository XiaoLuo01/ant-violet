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
      <span v-for="n in childrenLength" :key="n" :data-index="n -1" :class="{active : selectedIndex === n-1}" @click="select(n-1)"></span>
    </div>
    <div class="v-carousel-arrow">
      <span class="arrow-left" @click="select(selectedIndex -1)" data-action="prev">
        <v-icon name="v-arrow-left"></v-icon>
      </span>
      <span class="arrow-right" @click="select(selectedIndex +1)" data-action="next">
        <v-icon name="v-arrow-right"></v-icon>
      </span>
    </div>
  </div>
</template>

<script>
import Icon from './../../basic/icon/icon'
export default {
  name: 'vCarousel',
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    autoPlayDelay: {
      type: Number,
      default: 3
    }
  },
  components: {'v-icon': Icon},
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
      return this.items.map(vm => vm.name)
    },
    items() {
      return this.$children.filter(vm => vm.$options.name === 'vCarouselItem')
    }
  },
  mounted() {
    this.updatedChildren()
    if (this.autoPlay) {
      this.playAutomatically()
    }
    this.childrenLength = this.items.length
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
        this.timerId = setTimeout(run, this.autoPlayDelay * 1000)
      }
      this.timerId = setTimeout(run, this.autoPlayDelay * 1000)
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
      let first = this.items[0]
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
      this.items.forEach(vm => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        // if (this.timerId) {
            if (this.lastSelectedIndex === this.items.length -1 && this.selectedIndex === 0) {
            reverse = false
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1 ) {
            reverse = true
          }
        // }
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
  &-arrow {
    > span {
      background-color: rgba(31, 45, 61, 0.23);
      height: 36px;
      width: 36px;
      cursor: pointer;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      &.arrow-left {
        left: 16px;
      }
      &.arrow-right {
        right: 16px;
      }
    }
    .v-icon {
      margin: 0;
      fill: #fff;
      width: 14px;
      height: 14px;
    }
  }
}
</style>
