<template>
  <div class="v-cascader-items" :style="{height}">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="onClickLabel(item, index)" :class="{selected: selectedIndex === index}">
        {{item.name}}
        <v-icon class="icon" v-if="item.children" name="v-arrow-right"></v-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <v-cascader-items :items="rightItems" :height="height" :level="level+1" :selected="selected" @update:selected="onUpdateSelected"></v-cascader-items>
    </div>
  </div>
</template>

<script>
import vIcon from "../../basic/icon/icon";
export default {
  name: 'vCascaderItems',
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      selectedIndex: null
    }
  },
  components: {
    vIcon
  },
  computed: {
    rightItems() {
      // 通过 this.items 去查找更新
      if ( this.selected[this.level] ) {
        let selected = this.items.filter(item => item.name === this.selected[this.level].name)
        if(selected && selected[0].children && selected[0].children.length > 0) {
          return selected[0].children
        }
      }
    }
  },
  updated() {

  },
  methods: {
    onClickLabel(item, index) {
      let copyItem = JSON.parse(JSON.stringify(this.selected));
      copyItem[this.level] = item;
      copyItem.splice(this.level + 1) // 把后面的删除
      this.$emit('update:selected', copyItem);

      this.selectedIndex = index;
      this.leftSelected = item;
    },
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
}
</script>

<style scoped lang="scss">
.v-cascader-items {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 150px;
  .left {
    min-width: 111px;
    height: 100%;
    padding: 0.3em 0;
    box-sizing: border-box;
    overflow: auto;
  }
  .right {
    height: 100%;
    border-left: 1px solid #e4e7ed;
  }
  .label {
    padding: 8px 16px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    &:hover {
      background: #f5f7fa;
    }
    &.selected {
      color: #409eff;
      background: #f5f7fa;
    }
    .icon {
      position: absolute;
      right: 15px;
      margin-right: 0;
      width: 12px;
      fill: #bfcbd9;
    }
  }
}
</style>
