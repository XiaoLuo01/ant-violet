<template>
  <svg v-if="name" class="v-icon" aria-hidden="true">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
import "./svg"
export default {
  name: "vIcon",
  data() {
    return {}
  },
  props: ["name"],
  components: {}
}
</script>

<style scoped lang="scss">
.v-icon {
  width: 24px;
  height: 24px;
  fill: #606266;
  margin: 0 20px;
}
</style>