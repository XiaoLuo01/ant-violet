<template>
  <div class="v-col" :class="[span && `col-${span}`,  offset && `offset-${offset}`, gutter?'gutter-row':'']" :style="colStyle">
    <div :class="[gutter?'gutter-box':'']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vCol',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
  },
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      }
    }
  }
}

</script> 

<style scoped lang="scss">
.v-col {
  background: $grid-bg;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &:nth-child(odd) {
    background: $grid-bg-light;
  }
  &.gutter-row {
    background: transparent;
    .gutter-box {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 100%;
      background: $grid-bg;
    }
  }

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
