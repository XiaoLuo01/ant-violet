<template>
  <div class="v-pagination">
    <span v-for="(page, i) in pages" :key="i" class="v-pagination-item" :class="{active: page === currentPage, separator: page === '•••'}">
      {{page}}
    </span>
  </div>
</template>

<script>
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
  data() {
    let pages = [1, this.totalPage, this.currentPage, this.currentPage -1, this.currentPage -2, this.currentPage + 1, this.currentPage +2]
    let u = unique(pages.sort((a, b) => a - b))
    let u2 = u.reduce((prev, current, index, array) => {
      prev.push(current)
      array[index + 1] && array[index + 1] - array[index] > 1 && prev.push('•••')
      return prev
    }, [])

    return {
      pages: u2
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
    display: inline-block;
    min-width: 32px;
    height: 32px;
    margin-right: 8px;
    line-height: 30px;
    text-align: center;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    cursor: pointer;
    &.active, &:hover {
      border-color: #40a9ff;
      color: #40a9ff;
    }
    &.separator {
      color: rgba(0,0,0,0.25);
      letter-spacing: 2px;
      border: none;
      text-indent: .13em;
      cursor: default;
    }
  }
}
</style>
