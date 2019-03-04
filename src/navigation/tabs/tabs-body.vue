<template>
  <div class="v-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vTabsBody',
  data() {
    return {

    }
  },
  inject: ['eventBus'],
}
</script>

<style scoped lang="scss">

</style>
