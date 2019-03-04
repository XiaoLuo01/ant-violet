<template>
  <div class="v-tabs-item" @click="xxx" :class="classes">
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
      active: false
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
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style scoped lang="scss">
.v-tabs-item {
  flex-shrink: 0;
  padding: 0 2em;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active {
    background: red;
  }
}
</style>
