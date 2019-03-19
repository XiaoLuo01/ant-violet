<template>
  <div class="v-cascader">
    <div class="trigger" :class="{ active: popoverVisible }" @click="popoverVisible = !popoverVisible">
      <div class="result" :class="{ placeholder: selected.length <= 0 }">{{result}}</div>
      <v-icon name='v-arrow-right' class="v-icon"></v-icon>
    </div>
    <v-collaspe-transition class="popover-wrapper" :visible="popoverVisible">
      <cascader-items class="popover" :items="source" :height="popoverHeight" :selected="selected" @update:selected="onUpdateSelected"></cascader-items>
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
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    loadData: {
      type: Function
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
  computed: {
    result() {
      if (this.selected.length > 0) {
        return this.selected.map(item => item.name).join(' / ')
      } else {
        return '请选择'
      }
    }
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected);
      // 找到最后选择的那一项
      let lastItem = newSelected[newSelected.length - 1]
      let simplest = (children,id) => {
        return children.filter(item => item.id === id)[0]
      }
      let complex = (children,id) => {
        let noChildren = []
        let hasChildren = []
        children.forEach(val => {
          if (val.children) {
            hasChildren.push(val)
          } else {
            noChildren.push(val)
          }
        });
        let found = simplest(noChildren, id)
        if (found) {
          return found
        } else {
          found = simplest(hasChildren, id)
          if (found) {
            return found
          } else {
            for(let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id)
              if (found) {
                return found
              }
            }
            return undefined
          }
        }
      }
      let updateSource = (res) => {
        let copy = JSON.parse(JSON.stringify(this.source));
        let toUpdate = complex(copy, lastItem.id)
        toUpdate.children = res
        this.$emit('update:source', copy)
      }
      // 回调:把别人传给我的函数调用一下
      this.loadData(lastItem, updateSource)
    }
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
    > .result {
      font-size: 14px;
      &.placeholder {
        color: #c0c4cc;
      }
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
