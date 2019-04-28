<template>
  <div class="v-pagination">
    <span class="v-pagination-item" :class="{disabled:currentPage === 1}">
      <v-icon name="v-arrow-left"></v-icon>
    </span>
    <template v-for="(page, i) in pages">
      <template v-if="page === currentPage">
        <span class="v-pagination-item current" :key="i">{{page}}</span>
      </template>
      <template v-else-if="page === '•••'">
        <span class="v-pagination-item separator" :key="i">{{page}}</span>
      </template>
      <template v-else>
        <span class="v-pagination-item" :key="i">{{page}}</span>
      </template>
    </template>
    <span class="v-pagination-item" :class="{disabled:currentPage === totalPage}">
      <v-icon name="v-arrow-right"></v-icon>
    </span>
  </div>
</template>

<script>
import vIcon from "../../basic/icon/icon";
export default {
  name: 'vPagination',
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  components: {
    'v-icon': vIcon 
  },
  data() {
    let pages = unique([1, this.totalPage, this.currentPage, this.currentPage -1, this.currentPage -2, 
    this.currentPage + 1, this.currentPage +2])
    .filter((n) => n >= 1 && n <= this.totalPage )
    .sort((a, b) => a - b)
    .reduce((prev, current, index, array) => {
      prev.push(current)
      array[index + 1]  !== undefined && array[index + 1] - array[index] > 1 && prev.push('•••')
      return prev
    }, [])

    return {
      pages
    }
  },
}

function unique(array) {
  const object = {}
  array.map((num) => {
    object[num] = true
  })
  return Object.keys(object).map((s) => parseInt(s, 10))
}
</script>

<style scoped lang="scss">
.v-pagination {
  &-item {
    display: inline-flex;
    min-width: 32px;
    height: 32px;
    margin-right: 8px;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    cursor: pointer;
    &.current, &:hover {
      border-color: #40a9ff;
      color: #40a9ff;
      .v-icon {
        fill:#40a9ff;
      }
    }
    &.separator {
      color: rgba(0,0,0,0.25);
      letter-spacing: 2px;
      border: none;
      text-indent: .13em;
      cursor: default;
    }
    &.disabled {
      cursor: not-allowed;
      border-color: #d9d9d9;
      .v-icon {
        fill: rgba(0,0,0,0.25);
      }
    }
    .v-icon {
      margin: 0;
      fill: #666;
      width: 14px;
      height: 14px;
    }
  }
}
</style>
