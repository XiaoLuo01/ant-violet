<template>
  <div class="v-tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vTabsItem',
  props: {
    name: {
      type: String|Number,
      required: true
    }
  },
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
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
