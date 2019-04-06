<template>
  <div class="v-nav-menu" :class="{vertical}"> 
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vNavMenu',
  provide() {
    return {
      root: this,
      vertical: this.vertical
    }
  },
  props: {
    selected: {
      type: String
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [],
      namePath: []
    }
  },
  mounted() {
    this.updateChilren()
    this.listenToChildren()
  },
  updated() {
    this.updateChilren()
  },
  methods: {
    addItem(vm) {
      this.items.push(vm)
    },
    updateChilren() {
      this.items.forEach(vm => {
        if (this.selected === vm.name) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      });
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on('update:selected', (name) => {
          this.$emit('update:selected', name)
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.v-nav-menu {
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  // height: 48px;
  // line-height: 48px;
  font-size: 14px;
  &.vertical {
    flex-direction: column;
    width: 200px;
    border: 1px solid #e8e8e8;
  }
}
</style>
