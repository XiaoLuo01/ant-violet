<template>
  <div class="v-nav-menu-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vNavMenuItem',
  inject: ['root'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: false
    }
  },
  mounted() {
    // 每一个 items 都注入一个 父组件, 然后调用父组件的方法, 把自己的实例转递给父组件
    this.root.addItem(this)
  },
  methods: {
    onClick() {
      this.$emit('add:selected', this.name)
    }
  }
}
</script>

<style scoped lang="scss">
.v-nav-menu-item {
  padding: 0 20px;
  cursor: pointer;
  &.selected {
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
  }
}
</style>
