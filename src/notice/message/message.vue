<template>
  <div class="v-message">
    <v-icon name='v-info' class="v-info"></v-icon>
    <slot></slot>
    <div @click="onClickClose">
      <v-icon name='v-close' class="v-close"></v-icon>
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
      default: false
    },
    autoCloseDelay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {

    }
  },
  components: {
    'v-icon': Icon
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
      this.$el.remove()
      this.$destroy()
    },
    onClickClose() {
      this.close()
    }
  }
}
</script>

<style scoped lang="scss">
.v-message {
  min-width: 380px;
  border-radius: $border-radius;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background: #edf2fc;
  display: flex;
  align-items: center;
  padding: 15px 15px 15px 20px;
  z-index: 100;
  color: #909399;
  font-size: 14px;
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
    right: 0;
    width: 16px;
    height: 16px;
    fill: #c0c4cc;
    cursor: pointer;
  }
}
</style>
