<template>
  <div class="v-table">
    <table class="v-table-wrapper" :class="{bordered, compact, striped}">
      <thead class="v-table-thead">
        <tr>
          <th class="v-table-selection-column">
            <span class="v-checkbox-inner"></span>
            <input type="checkbox" class="v-checkbox-input" @change="onChangeAllItems" ref="allCheck" :checked="areAllItemsSelected">
          </th>
          <th v-for="(column, i) in columns" :key="'th_'+i" class=" is-sortable" @click="changeOrderBy(column.field)">
            <div>
              {{column.text}}
              <span v-if="column.field in orderBy" class="caret-wrapper" >
                <v-icon name='v-caret-top' class="v-icon-top" :class="{active: orderBy[column.field] === 'asc'}"></v-icon>
                <v-icon name='v-caret-bottom' class="v-icon-bottom" :class="{active: orderBy[column.field] === 'desc'}"></v-icon>
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="v-table-tbody">
        <tr v-for="(item, index) in dataSource" :key="'tr_'+index">
          <td class="v-table-selection-column">
            <span class="v-checkbox-inner"></span>
            <input type="checkbox" class="v-checkbox-input" @change="onChangeItem($event, item, index)" :checked="inSelectedItem(item)">
          </td>
          <template v-for="(column, k) in columns">
            <td  :key="'td_'+k">{{item[column.field]}}</td>
          </template>
        </tr>
      </tbody>
    </table>
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
    }
  },
  data() {
    return {

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
    }
  },
  methods: {
    changeOrderBy(key) {
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
  &-wrapper {
    width: 100%;
    display: table;
    border-collapse: collapse;
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
        > tr {
        background: #fafafa;
        > th {
          color: rgba(0,0,0,0.75);
          text-align: left;
          border-bottom: 1px solid #e8e8e8;
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
  position: relative;
  
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
}
</style>
