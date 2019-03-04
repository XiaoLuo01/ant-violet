<template>
  <div style="margin: 30px 0">
    <v-tabs :selected.sync='selected'>
      <v-tabs-head>
        <template slot="actions">
          <v-button>Extra Action</v-button>
        </template>
        <v-tabs-item name='social'>社会</v-tabs-item>
        <v-tabs-item name='finance'>财经</v-tabs-item>
        <v-tabs-item name='sports'>体育</v-tabs-item>
      </v-tabs-head>
      <v-tabs-body>
        <v-tabs-pane name='social'>
          <p>习近平在阿根廷媒体发表署名文章</p>
          <p>从总书记的晚餐菜单看优良作风的生动示范</p>
          <p>庆祝改革开放40周年大型展览新华社展项扫描</p>
        </v-tabs-pane>
        <v-tabs-pane name='finance'>
          <p>税务部门依法查处范冰冰“阴阳合同”等偷逃税问题</p>
          <p>恒指收跌1.73% 史上第四次低于道指</p>
          <p>油价大涨至85美元 新兴市场货币开启新一轮贬值</p>
        </v-tabs-pane>
        <v-tabs-pane name='sports'>
          <p>热火失三分绝杀韦德18分 老鹰拿下两连胜</p>
          <p>7人因伤缺阵 巴萨关键战排兵遇难题</p>
          <p>福布斯30岁以下名人收入榜：内马尔第三</p>
        </v-tabs-pane>
      </v-tabs-body>
    </v-tabs>
  </div>
</template>

<script>
import Tabs from "../../../src/navigation/tabs/tabs";
import TabsHead from "../../../src/navigation/tabs/tabs-head";
import TabsItem from "../../../src/navigation/tabs/tabs-item";
import TabsBody from "../../../src/navigation/tabs/tabs-body";
import TabsPane from "../../../src/navigation/tabs/tabs-pane";
import Button from "../../../src/basic/button/button";
export default {
  name: "",
  data() {
    return {
      selected: 'sports'
    };
  },
  components: {
    "v-tabs": Tabs,
    'v-tabs-head': TabsHead,
    'v-tabs-item': TabsItem,
    'v-tabs-body': TabsBody,
    'v-tabs-pane': TabsPane,
    "v-button": Button
  }
};
</script>
<style lang="scss" scoped>
p {
  line-height: 1.2;
}
</style>