<template>
  <div class="v-nav-submenu" v-click-outside="close">
    <div class="v-nav-submenu-title" @click="onClick" :class="{active}">
      <slot name="title"></slot>
    </div>
    <div class="v-nav-submenu-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from './../../directive/click-outside'
export default {
  name: 'vNavSubmenu',
  inject: ['root'],
  directives: {ClickOutside},
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true: false
    }
  },
  methods: {
    onClick() {
      this.open = !this.open
    },
    close() {
      this.open = false
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name)
      this.$parent.updateNamePath && this.$parent.updateNamePath()
    }
  }
}
</script>

<style scoped lang="scss">
.v-nav-submenu {
  position: relative;
  cursor: pointer;
  &-popover {
    position: absolute;
    left: 0;
    top: 100%;
    white-space: nowrap;
    background: #fff;
    z-index: 100;
    min-width: 200px;
    border: none;
    padding: 5px 0;
    margin-top: 5px;
    border-radius: 2px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    .v-nav-menu-item {
      height: 40px;
      line-height: 40px;
      margin-bottom: 8px;
    }
    .v-nav-menu-item.selected {
      background-color: #e6f7ff;
      border: none;
    }
  }
  &-title {
    padding: 0 20px;
    &.active {
      color: #1890ff;
      border-bottom: 2px solid #1890ff;
    }
  }
}

.v-nav-submenu .v-nav-submenu .v-nav-submenu-popover {
  top: 0;
  left: 100%;
  margin-left: 8px;
}
.v-nav-submenu .v-nav-submenu .v-nav-submenu-title {
  &.active {
    color: #1890ff;
    border-bottom: none;
  }
}
</style>
