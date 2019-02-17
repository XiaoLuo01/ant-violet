<template>
  <div class="v-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vRow',
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
.v-row {
  display: flex;
  flex-wrap: wrap;
}
</style>
