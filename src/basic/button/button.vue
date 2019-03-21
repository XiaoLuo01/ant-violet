<template>
  <button type="button" class="button" :class="{[`icon-${iconPosition}`]:true, wave, primary, danger, dashed, disabled}" @click="onClick">
    <v-icon class="icon" v-if="icon && !loading" :name="icon"></v-icon>
    <v-icon class="icon loading" v-if="loading" name="v-loading"></v-icon>
    <div class="button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from './../icon/icon'
export default {
  name: 'vButton',
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(val) {
        return val === 'left' || val === 'right'
      }
    },
    primary: { 
      type: Boolean, 
      default: false 
    },
    dashed: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      wave: false
    }
  },
  components: {
    'v-icon': Icon
  },
  mounted() {
    this.$el.addEventListener('animationend', this.listenAnimation)
  },
  methods: {
    listenAnimation() {
      this.wave = false
    },
    onClick(e) {
      if(this.disabled) {
        return
      }
      this.$emit('click', e)
      this.wave = true
    }
  },
  beforeDestroy() {
    this.$el.removeEventListener('animationend', this.listenAnimation)
  }
}
</script>

<style scoped lang="scss">
@keyframes after-scale {
  to {
    top: -8px;
    left: -8px;
    bottom: -8px;
    right: -8px;
    border-width: 8px;
    opacity: 0;
  }
}
.button {
  box-sizing: border-box;
  font-size: $font-size;
  height: $button-height; 
  padding: 0 1em;
  border-radius: $border-radius; 
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex; 
  justify-content: center; 
  align-items: center;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  position: relative;
  &:hover, &:focus {
    border-color: $border-color-hover;
    color: $hover-color;
    .icon {
      fill: $hover-color;
    }
  }
  &:active {
    border-color: $border-color-active;
    color: $active-color;
  }
  &.primary {
    background: $button-primary-bg;
    color: #fff;
    border-color: $border-primary-color;
    &:hover, &:focus {
      border-color: $border-color-hover;
      background: $border-color-hover;
    }
    > .icon {
      fill: #fff;
    }
  }
  &.dashed {
    border-style: dashed;
  }
  &.danger {
    color: $danger-color;
    background-color: $button-danger-bg;
    &:hover, &:focus {
      color: #fff;
      background-color: #ff4d4f;
      border-color: #ff4d4f;
      > .icon {
        fill: #fff;
      }
    }
    > .icon {
      fill: #ff4d4f;
    }
  }
  &.disabled {
    color: rgba(0,0,0,0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    cursor: not-allowed;
    &:hover, &:focus {
      color: rgba(0,0,0,0.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
  }
  > .icon {
    width: 14px;
    height: 14px;
    order: 1;
    margin-left: 0;
    margin-right: .3em;
  }
  > .button-content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }
    > .button-content {
      order: 1;
    }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
  // 动画水纹
  &::after {
    display: none;
  }
  &.wave {
    &::after {
      content: '';
      display: block;
      pointer-events: none;
      position: absolute;
      z-index: 1;
      top: -1px;
      left: -1px;
      bottom: -1px;
      right: -1px;
      border-radius: inherit;
      border: 0 solid #1890ff;
      opacity: 0.4;
      animation: after-scale 0.5s linear forwards;
    }
  }
  &.wave.danger {
    &::after {
      border-color: rgb(250, 71, 75);
    }
  }
}
</style>
