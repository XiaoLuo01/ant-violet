<template>
  <div class="v-collapse-item">
    <div class="title" @click="toggle" :data-name="name" :class="{selected:open}">
      <v-icon name='v-arrow-right' class="v-icon"></v-icon>
      <div>{{title}}</div>
    </div>
    <v-collaspe-transition :visible="open">
      <div class="collapse-content">
        <slot></slot>
      </div>
    </v-collaspe-transition>
    
  </div>
</template>

<script>
import CollaspeTransition from "../../others/collapse-transition/collapse-transition";
import vIcon from "../../basic/icon/icon";
export default {
  name: 'vCollapseItem',
  data() {
    return {
      open: false
    }
  },
  inject: ['eventBus'],
  components: { 
    'v-collaspe-transition' : CollaspeTransition, 
    'v-icon': vIcon 
  },
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', (names) => {
      // 传过来的 names 进行判断, 有则展开, 没有则不展开
      if(names.indexOf(this.name) < 0) {
        this.open = false
      } else {
        this.open = true
      }
    })
  },
  methods: {
    toggle() {
      if(this.open) {
        // 如果当前是展开的状态, 点击的时候就触发移除的函数
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        // 如果当前是关闭的状态, 点击的时候就触发添加的函数
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.v-collapse-item {
  > .title {
    border: 1px solid $collapse-border;
    background: $collapse-bg;
    display: flex;
    align-items: center;
    padding: 12px 8px;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    >.v-icon {
      margin-right: 10px;
      margin-left: 8px;
      width: 16px;
      height: 16px;
      transition: transform .3s;
      fill: #999;
    }
    &.selected {
      >.v-icon {
        transform: rotateZ(90deg);
      }
    }
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    margin-bottom: -1px;
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  .collapse-content {
    padding: 16px;
  }
}
</style>
