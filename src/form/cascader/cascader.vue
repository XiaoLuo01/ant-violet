<template>
  <div class="v-cascader">
    <div class="trigger" :class="{ active: popoverVisible }" @click="popoverVisible = !popoverVisible">
      <v-icon name='v-arrow-right' class="v-icon"></v-icon>
    </div>
    <v-collaspe-transition class="popover-wrapper" :visible="popoverVisible">
      <cascader-items class="popover" :items="options" :height="popoverHeight"></cascader-items>
    </v-collaspe-transition>
  </div>
</template>

<script>
import vIcon from "../../basic/icon/icon";
import CascaderItems from './cascader-items';
import CollaspeTransition from "../../others/collapse-transition/collapse-transition";
export default {
  name: 'vCascader',
  props: {
    options: {
      type: Array
    },
    popoverHeight: {
      type: String
    }
  },
  data() {
    return {
      popoverVisible: false,
      isActive: false,
    }
  },
  components: { 
    'v-collaspe-transition' : CollaspeTransition, 
    'v-icon': vIcon,
    CascaderItems
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.v-cascader {
  position: relative;
  display: inline-block;
  > .trigger {
    height: 32px;
    width: 200px;
    padding: 0 1em;
    border: 1px solid #dcdfe6;
    border-radius: $border-radius;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    &.active {
      border-color: #409eff;
      > .v-icon {
        transform: rotateZ(90deg);
      }
    }
    > .v-icon {
      position: absolute;
      right: 0;
      width: 12px;
      height: 12px;
      margin-right: 10px;
      fill: #c0c4cc;
      transition: all .3s;
    }
  }
  > .popover-wrapper {
    position: absolute;
    border: 1px solid #e4e7ed;
    top: 100%;
    left: 0;
    z-index: 99;
    background: #fff;
    display: flex;
    @extend .box-shadow;
  }
}
</style>
