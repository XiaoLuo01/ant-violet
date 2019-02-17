<template>
  <div class="v-col" :class="[span && `col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vCol',
  props: {
    span: {
      type: [Number, String]
    }
  },
  data() {
    return {

    }
  },
}
</script> 

<style scoped lang="scss">
.v-col {
  background: $grid-bg;
  padding: 8px 0;
  height: 24px;
  // width: 50%;
  text-align: center;
  color: #fff;
  &:nth-child(odd) {
    background: $grid-bg-light;
  }

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>
