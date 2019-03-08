<template>
  <div class="v-message" :class="toggleClasses">
    <div class="wrapper" :class="{removeEl: removeElement}">
      <v-icon name='v-info' class="v-info"></v-icon>
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div @click="onClickClose" v-if="closeButton" class="v-close">
        <v-icon name='v-close'></v-icon>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './../../basic/icon/icon'
export default {
  name: 'vMessage',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Boolean,
      default: false
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "middle"].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      removeElement: false
    }
  },
  components: {
    'v-icon': Icon
  },
  computed: {
    toggleClasses() {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  mounted() {
    this.execAutoClose()
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    close() {
      // 移除之前添加动画
      this.removeElement = true
      setTimeout(() => {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      }, 500)
    },
    onClickClose() {
      this.close()
    }
  }
}
</script>

<style scoped lang="scss">
$animation-duration: 500ms;
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-200%)
  }
  100% {
    opacity: 1;
    transform: translateY(0%)
  }
}
@keyframes slide-up {
  0% {
    opacity: 1;
    transform: translateY(0%)
  }
  100% {
    opacity: 0;
    transform: translateY(-200%)
  }
}
@keyframes fade-up {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.v-message {
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  z-index: 200;
  .wrapper {
    min-width: 380px;
    border-radius: $border-radius;
    display: flex;
    background: #edf2fc;
    display: flex;
    align-items: center;
    padding: 15px 15px 15px 20px;
    color: #909399;
    font-size: 14px;
  }
  .v-info {
    width: 16px;
    height: 16px;
    fill: #909399;
    margin: 0;
    padding-right: 10px;
  }
  .v-close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    > .v-icon {
      width: 16px;
      height: 16px;
      fill: #c0c4cc;
      cursor: pointer;
      margin: 0;
    }
  }
  &.position-top {
    top: 20px;
    .wrapper {
      animation: slide-down $animation-duration;
    }
    .removeEl {
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .wrapper {
      animation: slide-down $animation-duration;
    }
    .removeEl {
      animation: slide-up $animation-duration;
    }
  }
}
</style>
