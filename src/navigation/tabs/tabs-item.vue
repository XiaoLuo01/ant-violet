<template>
  <div class="v-tabs-item" @click="onClick" :class="classes" :data-name="name">
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
    },
    disabled: {
      type: Boolean,
      default: false
    },
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
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  },
  methods: {
    onClick() {
      if(this.disabled) return
      // 点击的时候触发 更新 事件
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this);
      this.$emit('click', this)
    }
  }
}
</script>

<style scoped lang="scss">
.v-tabs-item {
  flex-shrink: 0;
  padding: 0 1.6em;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active {
    font-weight: bold;
    color: $border-primary-color;
  }
  &.disabled {
    color: rgba(0,0,0,0.25);
    cursor: not-allowed;
  }
}
</style>
