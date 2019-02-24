<template>
  <div class="v-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vCollapse',
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
.v-collapse {
  border: 1px solid $collapse-border;
  border-radius: $border-radius;
}
</style>
