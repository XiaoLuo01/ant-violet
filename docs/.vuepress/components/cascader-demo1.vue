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
    ></v-cascader>
  </div>
</template>

<script>
import Button from "../../../src/basic/button/button";
import Cascader from "../../../src/form/cascader/cascader";
export default {
  name: "",
  data() {
    return {
      // 被选中
      selected: [],
      // 整体数据结构
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [{ name: "上城区" }, { name: "下城区" }]
            }
          ]
        },
        {
          name: "湖南",
          children: [
            {
              name: "长沙",
              children: [
                { name: "雨花区" },
                { name: "芙蓉区" },
                { name: "岳麓区" }
              ]
            },
            {
              name: "衡阳",
              children: [
                { name: "蒸湘区" },
                { name: "雁峰区" },
                { name: "珠晖区" }
              ]
            }
          ]
        },
        {
          name: "广东",
          children: [
            {
              name: "广州",
              children: [
                { name: "天河区" },
                { name: "白云区" },
                { name: "越秀区" }
              ]
            }
          ]
        }
      ]
    };
  },
  components: {
    "v-button": Button,
    "v-cascader": Cascader
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