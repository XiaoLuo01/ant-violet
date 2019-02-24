<template>
  <div style="margin: 30px 0">
    <v-collapse :selected.sync="selectedCollapse">
      <v-collapse-item name="politics" title="政治新闻">习近平在阿根廷媒体发表署名文章</v-collapse-item>
      <v-collapse-item name="sports" title="体育新闻">热火失三分绝杀韦德18分 老鹰拿下两连胜</v-collapse-item>
      <v-collapse-item name="science" title="科技新闻">比特币升至4000美元以上反弹逾6% 迎7月以来最大单日涨幅</v-collapse-item>
      <v-collapse-item name="finance" title="财经新闻">外资银行管理条例实施细则修改18条，细化准入、经营要求</v-collapse-item>
    </v-collapse>

    <p>当前展开内容的name：{{selectedCollapse}}</p>
  </div>
</template>

<script>
import Collapse from "../../../src/data/collapse/collapse";
import CollapseItem from "../../../src/data/collapse/collapse-item";
export default {
  name: "",
  data() {
    return {
      selectedCollapse: ['politics']
    };
  },
  components: {
    "v-collapse": Collapse,
    "v-collapse-item": CollapseItem
  }
};
</script>
<style lang="scss" scoped>

</style>