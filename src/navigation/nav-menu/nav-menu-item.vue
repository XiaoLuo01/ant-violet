<template>
  <div class="v-nav-menu-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vNavMenuItem',
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
