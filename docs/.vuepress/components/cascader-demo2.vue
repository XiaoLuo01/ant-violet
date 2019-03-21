<template>
  <div style="margin: 30px 0">
    <div style="margin-top:-15px">
      <p class="outside">通知外部: </p>
      <p class="outside">{{selected && selected[0] && selected[0].name || '空'}} </p>
      <p class="outside">{{selected && selected[1] && selected[1].name || '空'}}</p>
      <p class="outside">{{selected && selected[2] && selected[2].name || '空'}}</p>
    </div>
    <v-cascader
      :source.sync="source"
      popover-height='200px'
      :selected.sync="selected"
      :load-data="loadData"
    ></v-cascader>
  </div>
</template>

<script>
import Button from "../../../src/basic/button/button";
import Cascader from "../../../src/form/cascader/cascader";
import db from './city-db'

function ajax(parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id === parentId);
      // 去数据库查找当前节点是否有 children 
      result.forEach(node => {
        if(db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      resolve(result)
    }, 300)
  })
}

export default {
  name: "",
  data() {
    return {
      // 被选中
      selected: [],
      // 整体数据结构
      source: []
    };
  },
  components: {
    "v-button": Button,
    "v-cascader": Cascader
  },
  created() {
    ajax(0).then(res => {
      this.source = res;
    })
  },
  methods: {
    loadData({id}, updateSource) {
      ajax(id).then((res) => {
        console.log(res)
        updateSource(res)
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.outside {
  display: inline-flex;
  color: #096dd9;
  font-weight: 700
}
</style>