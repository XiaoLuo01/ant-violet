<template>
  <div class="v-popover">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block" @click="visible =!visible">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'vPopover',
  data() {
    return {
      visible: false
    }
  },
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
  bottom: 100%;
  border: 1px solid $popover-border;
  border-radius: $border-radius;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  word-break: break-all;
}
</style>
