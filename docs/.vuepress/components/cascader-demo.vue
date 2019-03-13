<template>
  <div style="margin: 30px 0">
    <v-cascader
      :options="source"
      popover-height='200px'
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
</style>