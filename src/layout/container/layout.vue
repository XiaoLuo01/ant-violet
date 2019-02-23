<template>
  <div class="v-layout" :class="layoutCls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vLayout',
  data() {
    return {
      layoutCls: {
        hasSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      console.log(vm.$options)
      if(vm.$options.name === 'vSider') {
        this.layoutCls.hasSider = true;
      }
    })
  }
}
</script>

<style scoped lang="scss">
.v-layout {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
