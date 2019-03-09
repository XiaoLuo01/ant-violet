<template>
  <div class="v-popover" @click="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
    xxx() {
      this.visible = !this.visible
      if (this.visible) {
        this.$nextTick(() => {
          // 把内容拿出来添加到 body 里面
          document.body.appendChild(this.$refs.contentWrapper)
          let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + 'px'
          this.$refs.contentWrapper.style.top = top + 'px'

          let eventHandler = () => {
            this.visible = false
            // 监听完毕之后就要移除, 不然的话每一次点击都会新增一个监听器
            document.removeEventListener('click', eventHandler)
          }

          document.addEventListener('click', eventHandler)
        })
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
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  word-break: break-all;
  transform: translateY(-100%);
}
</style>
