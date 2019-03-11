---
title: Navigation 导航
---

## Tabs - 标签页
分隔内容上有关联但属于不同类别的数据集合。

### 基础用法:

<ClientOnly>
  <tabs-demo1></tabs-demo1>
</ClientOnly>

```HTML
<v-tabs :selected.sync='selected'>
  <v-tabs-head>
    <v-tabs-item name='social'>社会</v-tabs-item>
    <v-tabs-item name='finance'>财经</v-tabs-item>
    <v-tabs-item name='sports'>体育</v-tabs-item>
    <v-tabs-item name='' disabled>禁用</v-tabs-item>
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
```

```js
data() {
  return {
    selected: 'sports'
  };
}
```

### 附加内容:

可以在页签右边添加附加操作。

<ClientOnly>
  <tabs-demo2></tabs-demo2>
</ClientOnly>

```HTML
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
```

### v-tabs Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
selected | 当前选中的标签名，可用.sync修饰符绑定，必填 | String | — | —

### v-tabs-head Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
name | head 的名称，必填，且与对应的 pane 一致 | Number, String | — | —
disabled | head 禁用 | Boolean | — | false

### v-tabs-pane Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
name | pane 的名称，必填，且与对应的 head 一致 | Number, String | — | —