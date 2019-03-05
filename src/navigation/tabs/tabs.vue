<template>
  <div class="v-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'vTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) >= 0
      }
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
    this.selectTab();
  },
  methods: {
    selectTab() {
      // 查找到当前 selected 的 vm 实例
      this.$children.forEach(vm => {
        if (vm.$options.name === 'vTabsHead') {
          vm.$children.forEach(childVm => {
            if (childVm.$options.name === 'vTabsItem' && childVm.name === this.selected) {
              // 这里是初始化的时候触发事件, 告诉事件中心 选择了谁
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    },
    checkChildren() {
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
