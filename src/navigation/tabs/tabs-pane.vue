<template>
  <div class="v-tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vTabsPane',
  data() {
    return {

    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      // console.log(name)
    })
  },
}
</script>

<style scoped lang="scss">

</style>