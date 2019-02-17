<template>
  <div class="v-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vRow',
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator(val) {
        return ['left', 'right', 'center'].indexOf(val) >= 0
      }
    }
  },
  data() {
    return {

    }
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter /2 + "px",
        marginRight: -this.gutter / 2 + "px"
      }
    },
    rowClass() {
      let {align} = this
      return [align && `align-${align}`]
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style scoped lang="scss">
.v-row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>
