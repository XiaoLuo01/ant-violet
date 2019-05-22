<template>
  <div class="v-table" ref="wrapper">
    <div :style="{height, overflow: 'auto'}" ref="tableWrapper">
      <table class="v-table-wrapper" :class="{bordered, compact, striped}" ref="table">
        <thead class="v-table-thead">
          <tr>
            <th class="v-table-selection-column" v-if="checkable">
              <input type="checkbox" class="v-checkbox-input" @change="onChangeAllItems" ref="allCheck" :checked="areAllItemsSelected">
            </th>
            <th class="v-table-selection-column" v-if="expandField"></th>
            <th v-for="(column, i) in columns" :key="'th_'+i" class=" is-sortable" @click="changeOrderBy(column.field)" :style="{width: column.width + 'px'}">
              <div>
                {{column.text}}
                <span v-if="orderBy && column.field in orderBy" class="caret-wrapper" >
                  <v-icon name='v-caret-top' class="v-icon-top" :class="{active: orderBy[column.field] === 'asc'}"></v-icon>
                  <v-icon name='v-caret-bottom' class="v-icon-bottom" :class="{active: orderBy[column.field] === 'desc'}"></v-icon>
                </span>
              </div>
            </th>
            <th ref="actionsHeader" v-if="$scopedSlots.default">操作</th>
          </tr>
        </thead>
        <tbody class="v-table-tbody">
          <template v-for="(item, index) in dataSource">
            <tr :key="'tr_'+index">
              <td class="v-table-selection-column" v-if="checkable">
                <input type="checkbox" class="v-checkbox-input" @change="onChangeItem($event, item, index)" :checked="inSelectedItem(item)">
              </td>
              <td class="v-table-selection-column" v-if="expandField">
                <v-icon v-if="item[expandField]" name="v-arrow-right" @click="expandItem(item.id)" :class="{expand: inExpandIds(item.id)}"></v-icon>
              </td>
              <template v-for="(column, k) in columns">
                <td  :key="'td_'+k" :style="{width: column.width + 'px'}">{{item[column.field]}}</td>
              </template>
              <td v-if="$scopedSlots.default">
                <div ref="actions" style="display: inline-block;">
                  <slot :item="item"></slot>
                </div>
              </td>
            </tr>
            <tr v-if="item[expandField] && inExpandIds(item.id)" :key="'tr2_'+index">
              <td ></td>
              <td :colspan="columns.length + expandedCellColspan">
                {{item[expandField]}}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <!-- loding -->
    <div v-if="loading" class="v-table-loading">
      <v-icon name="v-loading"></v-icon>
    </div>
  </div>
</template>

<script>
import vIcon from "../../basic/icon/icon";
export default {
  name: 'vTable',
  props: {
    columns: {
      type: Array,
      required: true
    },
    orderBy: {
      type: Object,
      default: () => {}
    },
    dataSource: {
      type: Array,
      required: true,
      validator(array) {
        return !(array.filter(item => item.id === undefined).length > 0)
      }
    },
    expandField: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    }, 
    bordered: {
      type: Boolean,
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    selectedItems: {
      type: Array,
      default: () => []
    },
    height: {
      type: Number
    },
    checkable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      expandedIds: []
    }
  },
  components: {
    'v-icon': vIcon
  },
  computed: {
    areAllItemsSelected() {
      const a = this.dataSource.map(item => item.id).sort()
      const b = this.selectedItems.map(item => item.id).sort()
      
      if (a.length !== b.length) {
        return false
      }

      let equal = true
      for (let i = 0; i< a.length; i++) {
          if(a[i] !== b[i]) {
            equal = false
            break
          }
        }
      return equal
    },
    expandedCellColspan() {
      let result = 0
      if (this.checkable) { result += 1} 
      if (this.expandField) { result += 1} 
      return result
    }
  },
  mounted() {
    // 克隆 dom 节点
    let table2 = this.$refs.table.cloneNode(false)
    this.table2 = table2
    let thead = this.$refs.table.children[0]
    let {height} = thead.getBoundingClientRect()
    this.$refs.tableWrapper.style.marginTop = height + 'px'
    this.$refs.tableWrapper.style.height = this.height - height + 'px'
    table2.appendChild(thead)
    table2.classList.add('v-table-copy')
    this.$refs.wrapper.appendChild(table2)


    if (this.$scopedSlots.default) {
      let div = this.$refs.actions[0]
      let {width} = div.getBoundingClientRect()
      let parent = div.parentNode
      let styles = getComputedStyle(parent)
      let paddingLeft = styles.getPropertyValue('padding-left')
      let paddingRight = styles.getPropertyValue('padding-right')
      let borderLeft = styles.getPropertyValue('border-left-width')
      let borderRight = styles.getPropertyValue('border-right-width')
      let width2 = width + parseInt(paddingLeft) + parseInt(paddingRight) + parseInt(borderLeft) + parseInt(borderRight) + 'px'
      this.$refs.actionsHeader.style.width = width2
      this.$refs.actions.map(div => {
        div.parentNode.style.width = width2
      })
    }
  },
  beforeDestroy() {
    this.table2.remove()
  },
  methods: {
    inExpandIds(id) {
      return this.expandedIds.indexOf(id) >= 0
    },
    expandItem(id){
      if (this.inExpandIds(id)) {
        this.expandedIds.splice(this.expandedIds.indexOf(id), 1)
      } else {
        this.expandedIds.push(id)
      }
    },
    changeOrderBy(key) {
      if (!this.orderBy) {
        return
      }
      let copy = JSON.parse(JSON.stringify(this.orderBy))
      let oldValue = copy[key]
      if (oldValue === 'asc') {
        copy[key] = 'desc'
      } else if (oldValue === 'desc') {
        copy[key] = true
      } else {
        copy[key] = 'asc'
      }
      this.$emit('update:orderBy', copy)
    },
    inSelectedItem(item) {
      return this.selectedItems.filter(i => i.id === item.id).length > 0
    },
    onChangeItem(e, item, index) {
      let selected = e.target.checked
      let copySelectedItems = JSON.parse(JSON.stringify(this.selectedItems))
      if (selected) {
        copySelectedItems.push(item)
      } else {
        copySelectedItems = copySelectedItems.filter(i => i.id !== item.id)
      }
      this.$emit('update:selectedItems', copySelectedItems)
    },
    onChangeAllItems(e) {
      let selected = e.target.checked
      this.$emit('update:selectedItems', selected ? this.dataSource : [])
    }
  },
  watch: {
    selectedItems() {
      if (this.selectedItems.length === this.dataSource.length) {
        this.$refs.allCheck.indeterminate = false
      } else if(this.selectedItems.length === 0) {
        this.$refs.allCheck.indeterminate = false
      }else {
        this.$refs.allCheck.indeterminate = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.v-table {
  position: relative;
  overflow: hidden;
  &-wrapper {
    width: 100%;
    display: table;
    border-collapse: collapse;
    margin: 0;
    tr .v-table-selection-column {
      width: 28px;
      padding: 16px 10px;
      text-align: center;
      // position: relative;
      .v-icon {
        width: 16px;
        height: 16px;
        margin: 0;
        transition: all .3s;
        &.expand {
          transform: rotate(90deg);
        }
      }
    }
    &.bordered {
      border: 1px solid #e8e8e8;
    }
    &.compact {
      th, td, tr {
        padding: 8px 8px;
      }
    }
    &.striped {
      tr:nth-child(2n) {
        background: #fafafa;
      }
    }
    .v-table-thead {
      tr {
        background: #fafafa;
        th {
          color: rgba(0,0,0,0.75);
          text-align: left;
          border-bottom: 1px solid #e8e8e8;
          // box-sizing: border-box;
        }
      }
    }
    .v-table-tbody {
      > tr {
        > td {
          border-bottom: 1px solid #e8e8e8;
        }
        &:hover {
          td {
            background: #e6f7ff;
          }
        }
      }
    }
    th, td, tr {
      border: none;
      padding: 16px 16px;
      font-size: 14px;
    }
    th.is-sortable {
      cursor: pointer;
      user-select: none;
      div {
        display: flex;
        align-items: center;
      }
    }
    .caret-wrapper {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      width: 18px;
      vertical-align: middle;
      cursor: pointer;
      position: relative;
      .v-icon {
        width: 16px;
        height: 16px;
        fill: #c0c4cc;
        &.active {
          fill: #409eff;
        }
      }
      .v-icon-top {
        margin-bottom: -5px;
      }
      .v-icon-bottom {
        margin-top: -5px;
      }
    }
  }

  &-loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255,255,255,0.7);
    .v-icon {
      width: 40px;
      height: 40px;
      @include spin;
    }
  }

  &-copy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
