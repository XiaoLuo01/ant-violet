<template>
  <div class="v-input-wrapper" :class="{error, icon}">
    <v-icon :name="icon" class="prefix-icon"></v-icon>
    <input :value="value" :placeholder="placeholder" :disabled="disabled" type="text" @change="$emit('change', $event.target.value)" @input="$emit('input', $event.target.value)" @focus="$emit('focus', $event.target.value)" @blur="$emit('blur', $event.target.value)">
    <template v-if="error">
      <v-icon name="v-warning" class="icon-error"></v-icon>
      <span class="error-msg">{{error}}</span>
    </template>
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
    "v-icon": Icon
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
      &:hover, &:focus {
        border-color: $red;
      }
      &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px rgba(241, 69, 61, .2);
      }
    }
  }
  &.icon {
    position: relative;
    > .prefix-icon {
      position: absolute;
      top: 50%;
      left: 0;
      margin: 0 6px;
      width: 20px;
      height: 20px;
      margin-top: -10px;
    }
    > input {
      padding-left: 30px;
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
    width: 16px;
    height: 16px;
    margin:0 .5em;
  }
  .error-msg {
    color: $red;
  }
}
</style>
