<template>
  <div class="v-tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vTabsPane',
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String|Number,
      required: true
    }
  },
  inject: ['eventBus'],
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  },
}
</script>

<style scoped lang="scss">

</style>