<template>
  <svg v-if="name" class="v-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
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
  width: 1em;
  height: 1em;
}
</style>