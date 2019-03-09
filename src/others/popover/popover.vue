<template>
  <div class="v-popover" ref="popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]: true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'vPopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'bottom', 'left', 'right'].indexOf(val) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(val) {
        return ['click', 'hover'].indexOf(val) >= 0
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted() {

  },
  destroyed() {

  },
  methods: {
    positionContent() {
      const {contentWrapper, triggerWrapper} = this.$refs
      // 把内容拿出来添加到 body 里面
      document.body.appendChild(contentWrapper)
      const {width, height, left, top} = triggerWrapper.getBoundingClientRect()
      const {height: height2} = contentWrapper.getBoundingClientRect()
      let position = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + (height - height2)/2 + window.scrollY,
          left: left + window.scrollX
        },
        right: {
          top: top + (height - height2)/2 + window.scrollY,
          left: left + width + window.scrollX
        }
      }
      contentWrapper.style.left = position[this.position].left + 'px'
      contentWrapper.style.top = position[this.position].top + 'px'
    },
    onClickDocument(e) {
      // 如果点击的是 popover 组件或者 内部, 则不管, 让他自己去关闭
      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))){
        return
      }
      // 如果点击的是内容区域, 则不需要关闭
      if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
        return
      }
      this.close()
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      this.visible = false
      // 监听完毕之后就要移除, 不然的话每一次点击都会新增一个监听器
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick() {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.v-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  background: #fff;
  max-width: 20em;
  z-index: 999;
  border: 1px solid $popover-border;
  border-radius: $border-radius;
  // box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));
  padding: .5em 1em;
  word-break: break-all;
  &::after, &::before {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0px;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::after, &::before {
      left: 10px;
      border-bottom: none;
    }
    &::before {
      top: 100%;
      border-top-color: $popover-border;;
    }
    &::after {
      top: calc(100% - 1px);
      border-top-color: white;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::after, &::before {
      left: 10px;
      border-top: none;
    }
    &::before {
      bottom: 100%;
      border-bottom-color: $popover-border;;
    }
    &::after {
      bottom: calc(100% - 1px);
      border-bottom-color: white;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::after, &::before {
      top: 50%;
      transform: translateY(-50%);
      border-right: none;
    }
    &::before {
      left: 100%;
      border-left-color: $popover-border;;
    }
    &::after {
      left: calc(100% - 1px);
      border-left-color: white;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::after, &::before {
      top: 50%;
      transform: translateY(-50%);
      border-left: none;
    }
    &::before {
      right: 100%;
      border-right-color: $popover-border;;
    }
    &::after {
      right: calc(100% - 1px);
      border-right-color: white;
    }
  }
}
</style>
