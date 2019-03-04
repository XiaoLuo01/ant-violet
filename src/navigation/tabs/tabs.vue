<template>
  <div class="v-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'vTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) >= 0
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped lang="scss">

</style>
