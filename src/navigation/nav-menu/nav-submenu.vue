<template>
  <div class="v-nav-submenu" v-click-outside="close">
    <div class="v-nav-submenu-title" @click="onClick" :class="{active, vertical}">
      <slot name="title"></slot>
      <v-icon class="v-nav-submenu-icon second" name="v-arrow-right" :class="{open}"></v-icon>
      <v-icon class="v-nav-submenu-icon first" name="v-arrow-down
      " :class="{open}"></v-icon>
    </div>
    
    <v-collaspe-transition class="popover-wrapper" :visible="open">
      <div class="v-nav-submenu-popover" :class="{vertical}">
        <slot></slot>
      </div>
    </v-collaspe-transition>
  </div>
</template>

<script>
import ClickOutside from './../../directive/click-outside'
import vIcon from "../../basic/icon/icon";
import CollaspeTransition from "../../others/collapse-transition/collapse-transition";
export default {
  name: 'vNavSubmenu',
  inject: ['root', 'vertical'],
  directives: {ClickOutside},
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: {
    'v-icon': vIcon,
    'v-collaspe-transition' : CollaspeTransition 
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
      this.$parent.$parent.updateNamePath && this.$parent.$parent.updateNamePath()
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
    &.vertical {
      position: static;
      border-radius: 0;
      box-shadow: none;
      margin-top: 0;
      padding: 0;
      padding-left: 10px;
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
    }
  }
  &-title {
    padding: 0 30px 0 20px;
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    &.vertical {
      &.active {
        color: #1890ff;
        border-bottom: none;
      }
    }
    &.active {
      color: #1890ff;
      border-bottom: 2px solid #1890ff;
    }
    .v-nav-submenu-icon {
      margin: 0;
      width: 12px;
      height: 12px;
      position: absolute;
      right: 10px;
      transition: all 0.5s;
      display: none;
      &.open {
        transform: rotate(180deg);
      }
      &.first {
        display: block;
      }
    }
  }
}

.v-nav-submenu .v-nav-submenu .v-nav-submenu-popover {
  top: 0;
  left: 100%;
  margin-left: 8px;
  &.vertical {
    margin-left: 0;
    padding-left: 15px;
    box-sizing: border-box;
  }
}
.v-nav-submenu .v-nav-submenu .v-nav-submenu-title {
  &.active {
    color: #1890ff;
    border-bottom: none;
  }
  .v-nav-submenu-icon {
    right: 20px;
    &.second {
      display: block;
    }
    &.first {
      display: none;
    }
    &.open {
      transform: rotate(180deg);
    }
  }
  &.vertical {
    .v-nav-submenu-icon {
      &.second {
        display: none;
      }
      &.first {
        display: block;
      }
    }
  }
}
</style>
