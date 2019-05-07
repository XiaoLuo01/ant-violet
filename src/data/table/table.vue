<template>
  <div class="v-table">
    <table class="v-table-wrapper" :class="{bordered, compact, striped}">
      <thead class="v-table-thead">
        <tr>
          <th class="v-table-selection-column">
            <span class="v-checkbox-inner"></span>
            <input type="checkbox" class="v-checkbox-input" @change="onChangeAllItems" ref="allCheck">
          </th>
          <th v-for="(column, i) in columns" :key="'th_'+i">
            {{column.text}}
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
  </div>
</template>

<script>
export default {
  name: 'vTable',
  props: {
    columns: {
      type: Array,
      required: true
    },
    dataSource: {
      type: Array,
      required: true,
      validator(array) {
        return !(array.filter(item => item.id === undefined).length > 0)
      }
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
  methods: {
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
  }
  
}
</style>
