<template>
  <div class="v-tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
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
    
  }
}
</script>

<style scoped lang="scss">

</style>
