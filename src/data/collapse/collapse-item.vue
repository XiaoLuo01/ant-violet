<template>
  <div class="v-collapse-item">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vCollapseItem',
  data() {
    return {
      open: false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style scoped lang="scss">
.v-collapse-item {
  > .title {
    border: 1px solid $collapse-border;
    background: $collapse-bg;
    display: flex;
    padding: 12px 8px;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    margin-bottom: -1px;
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 16px;
  }
}
</style>
