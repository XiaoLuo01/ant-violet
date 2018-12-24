<template>
  <div class="v-input-wrapper">
    <input :value="value" :placeholder="placeholder" :disabled="disabled" type="text">
  </div>
</template>

<script>
import Icon from "./../../basic/icon/icon"
export default {
  name: 'vInput',
  data() {
    return {

    }
  }, 
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
    },
    error: {
      type: String,
      default: ""
    }
  },
  components: {
    Icon
  }
}
</script>

<style scoped lang="scss">
.v-input-wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  // > :not(:last-child) {
  //   margin-right: 0.5em;
  // }
  &.error {
    > input {
      border-color: $red;
    }
  }
  > input {
    height: $input-height;
    border: 1px solid $border-color;
    border-radius: $border-raduis;
    padding: 0 8px;
    font-size: inherit;
    &:hover, &:focus {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px $box-shadow-color;
    }
    &[disabled],
    &[readonly] {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }
  .icon-error {
    fill: $red;
  }
  .error-msg {
    color: $red;
  }
}
</style>
