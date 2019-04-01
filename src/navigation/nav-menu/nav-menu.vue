<template>
  <div class="v-nav-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vNavMenu',
  provide() {
    return {
      root: this
    }
  },
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    multiple: {
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
        if (this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      });
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on('add:selected', (name) => {
          if (this.multiple) {
            if (this.selected.indexOf(name) < 0) {
              let copySelected = JSON.parse(JSON.stringify(this.selected))
              copySelected.push(name)
              this.$emit('update:selected', copySelected)
            }
          } else {
            this.$emit('update:selected', [name])
          }
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
  height: 48px;
  line-height: 48px;
  font-size: 14px;
}
</style>
