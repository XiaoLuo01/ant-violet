<template>
  <div class="v-tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'vTabsHead',
  data() {
    return {

    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (name, vm) => {
      let {width, height, top, left} = vm.$el.getBoundingClientRect()
      let offsetLeft = vm.$el.offsetLeft
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${offsetLeft}px`
    })
  }
}
</script>

<style scoped lang="scss">
.v-tabs-head {
  display: flex;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  > .line {
    position: absolute;
    bottom: -2px;
    border-bottom: 2px solid $border-primary-color;
    transition: all 350ms;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
