<template>
  <div class="v-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'vCollapse',
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    // toggle 的时候触发子组件的 显示和隐藏 事件
    this.eventBus.$emit('update:selected', this.selected)

    // 在父组件监听 添加selected 的事情, 在子组件 toggle 的时候触发事件
    this.eventBus.$on('update:addSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      // 是否是手风琴效果, 只展开一个
      if(this.accordion) {
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      // 修改selected 数组之后, 触发 更新selected 事件, 通知子组件
      this.eventBus.$emit('update:selected', selectedCopy)
      // 同时也要通知外界 
      this.$emit('update:selected', selectedCopy)
    })

    // 在父组件监听 移除selected 的事情, 在子组件 toggle 的时候触发事件
    this.eventBus.$on('update:removeSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      // 关闭的时候移除当前 selected
      let index = selectedCopy.indexOf(name)
      selectedCopy.splice(index, 1)
      // 修改selected 数组之后, 触发 更新selected 事件, 通知子组件
      this.eventBus.$emit('update:selected', selectedCopy)
      // 同时也要通知外界 
      this.$emit('update:selected', selectedCopy)
    })
  }
}
</script>

<style scoped lang="scss">
.v-collapse {
  border: 1px solid $collapse-border;
  border-radius: $border-radius;
}
</style>
