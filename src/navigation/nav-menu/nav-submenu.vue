<template>
  <div class="v-nav-submenu">
    <div class="v-nav-submenu-title" @click="onClick">
      <slot name="title"></slot>
    </div>
    <div class="v-nav-submenu-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vNavSubmenu',
  data() {
    return {
      open: false
    }
  },
  methods: {
    onClick() {
      this.open = !this.open
    }
  }
}
</script>

<style scoped lang="scss">
.v-nav-submenu {
  position: relative;
  padding: 0 20px;
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
}

.v-nav-submenu .v-nav-submenu .v-nav-submenu-popover {
  top: 0;
  left: 100%;
  margin-left: 8px;
}
</style>
