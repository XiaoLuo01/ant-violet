---
title: Data 数据展示
---

## Collapse 折叠面板

可以折叠/展开的内容区域。

### 基础用法:

可同时展开多个面板，面板之间不影响，这个例子默认展开了第一个。

<ClientOnly>
  <collapse-demo1></collapse-demo1>
</ClientOnly>

```HTML
<v-collapse :selected.sync="selectedCollapse">
  <v-collapse-item name="politics" title="政治新闻">
    习近平在阿根廷媒体发表署名文章
  </v-collapse-item>
  <v-collapse-item name="sports" title="体育新闻">
    热火失三分绝杀韦德18分 老鹰拿下两连胜
  </v-collapse-item>
  <v-collapse-item name="science" title="科技新闻">
    比特币升至4000美元以上反弹逾6% 迎7月以来最大单日涨幅
  </v-collapse-item>
  <v-collapse-item name="finance" title="财经新闻">
    外资银行管理条例实施细则修改18条，细化准入、经营要求
  </v-collapse-item>
</v-collapse>

<p>当前展开内容的name：{{selectedCollapse}}</p>
```
```js
data() {
  return {
    selectedCollapse: ['politics']
  }
}
```

### 手风琴效果:

每次只能展开一个面板，默认打开第一个。

<ClientOnly>
  <collapse-demo2></collapse-demo2>
</ClientOnly>

```HTML
<v-collapse :selected.sync="selectedCollapse" accordion>
  <v-collapse-item name="politics" title="政治新闻">
    习近平在阿根廷媒体发表署名文章
  </v-collapse-item>
  <v-collapse-item name="sports" title="体育新闻">
    热火失三分绝杀韦德18分 老鹰拿下两连胜
  </v-collapse-item>
  <v-collapse-item name="science" title="科技新闻">
    比特币升至4000美元以上反弹逾6% 迎7月以来最大单日涨幅
  </v-collapse-item>
  <v-collapse-item name="finance" title="财经新闻">
    外资银行管理条例实施细则修改18条，细化准入、经营要求
  </v-collapse-item>
</v-collapse>

<p>当前展开内容的name：{{selectedCollapse}}</p>
```
```js
data() {
  return {
    selectedCollapse: ['politics']
  }
}
```

### v-collapse Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
selected | 当前展开 item 的 name 组成的数组。可以用 .sync 修饰符绑定。 | Array | — | —
accordion | 是否手风琴模式 | Boolean | — | false

### v-collapse-item Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
name | item 的 name 属性，唯一且必填 | String | — | —
title | item 的 title 属性，即标题文本 | String | — | —