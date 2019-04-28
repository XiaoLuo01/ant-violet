<template>
  <div class="v-pagination" :class="{hide: hideIfOnePage && totalPage <= 1}">
    <span class="v-pagination-item" :class="{disabled:currentPage === 1}" @click="onClickPage(currentPage-1)">
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
        <span class="v-pagination-item" :key="i" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span class="v-pagination-item" :class="{disabled:currentPage === totalPage}" @click="onClickPage(currentPage+1)">
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
    return {
    }
  },
  computed: {
    pages() { // 依赖 totalPage 和 currentPage
      // 总数大于9
      if (this.totalPage > 9) {
        let array = [1, this.totalPage, this.currentPage, this.currentPage - 1, this.currentPage - 2, 
        this.currentPage + 1, this.currentPage + 2];
        if (this.currentPage <= 5) {
          array = [1, 2, 3, 4, 5, 6, 7, this.currentPage + 1, this.currentPage + 2, this.totalPage];
        }
        if (this.currentPage >= this.totalPage - 4) {
          array = [1, this.totalPage, this.currentPage, this.totalPage - 1, this.totalPage - 2, this.totalPage - 3, this.totalPage - 4, this.totalPage - 5, this.totalPage - 6];
        }
        array = unique(array.sort((a, b) => a - b));
        let pages = array.reduce((prev, current, index, array) => {
          prev.push(current);
          let length = prev.length;
          if (prev[length - 2] && current - prev[length - 2] > 2) {
            // 前后大于 2 时, 添加 ...
            prev.splice(prev.length - 1, 0, '•••');
          }
          return prev;
        }, []);
        return pages = pages.filter(n => (n >= 1 && n <= this.totalPage) || n === '•••');
      } else {
        let array = [this.totalPage, 
        this.totalPage - 1, this.totalPage - 2, this.totalPage - 3, this.totalPage - 4, this.totalPage - 5, this.totalPage - 6, this.totalPage - 7, this.totalPage - 8]
        let pages = unique(array.sort((a, b) => a - b));
        pages = pages.filter(n => (n >= 1 && n <= this.totalPage));
        return pages
      }
    }
  },
  methods: {
    onClickPage(n) {
      if (n >= 1 && n <= this.totalPage) {
        this.$emit('update:currentPage', n)
      }
    }
  }
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
  &.hide {
    display: none;
  }
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
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
    user-select:none;
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
