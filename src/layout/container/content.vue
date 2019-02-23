<template>
  <div class="v-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vContent',
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
.v-content {
  flex-grow: 1;
}
</style>