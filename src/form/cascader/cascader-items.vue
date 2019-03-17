<template>
  <div class="v-cascader-items" :style="{height}">
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="selectedLeft(item, index)" :class="{selected: selectedIndex === index}">
        {{item.name}}
        <v-icon class="icon" v-if="item.children" name="v-arrow-right"></v-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <v-cascader-items :items="rightItems" :height="height"></v-cascader-items>
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
    }
  },
  data() {
    return {
      leftSelected: null,
      selectedIndex: null
    }
  },
  components: {
    vIcon
  },
  computed: {
    rightItems() {
      if(this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    }
  },
  methods: {
    selectedLeft(item, index) {
      this.selectedIndex = index;
      this.leftSelected = item
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
    padding: .3em 0;
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
