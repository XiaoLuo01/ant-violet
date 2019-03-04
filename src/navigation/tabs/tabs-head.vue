<template>
  <div class="v-tabs-head">
    <slot></slot>
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

  }
}
</script>

<style scoped lang="scss">
.v-tabs-head {
  display: flex;
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>
