<template>
 <div class="v-button-group">
    <slot></slot>
 </div>
</template>

<script>
export default {
  name: 'vButtonGroup',
 data() {
  return {

  }
 },
 mounted() {
    for(let key of this.$el.children) {
        let name = key.nodeName.toLowerCase()
        if(name !== 'button') {
            console.warn(`v-button-group 的子元素应该全是 v-button, 但是你写的是 ${name}`)
        }
    }
 },
 components: {
 }
}
</script>

<style scoped lang="scss">
.v-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .button {
        border-radius: 0;
        &:not(:first-child) {
            margin-left: -1px;
        }
        &:first-child {
            border-top-left-radius: $border-radius;
            border-bottom-left-radius: $border-radius;
        }
        &:last-child {
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
        &:hover {
            position: relative;
            z-index: 1;
        }
    }
    > .button.primary {
      &:not(:first-child) {
        border-left-color: #40a9ff;
      }
    }
}
</style>
