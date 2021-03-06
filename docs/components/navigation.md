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

## NavMenu - 导航菜单
为页面和功能提供导航的菜单列表。

### 顶部导航:
水平的顶部导航菜单。

<ClientOnly>
  <nav-menu-demo1></nav-menu-demo1>
</ClientOnly>

```HTML
<v-nav-menu :selected.sync="selected">
  <v-nav-menu-item name="home">平台首页</v-nav-menu-item>
  <v-nav-submenu name="about">
    <template slot="title">关于公司</template>
    <v-nav-menu-item name="culture">企业文化</v-nav-menu-item>
    <v-nav-menu-item name="developers">开发团队</v-nav-menu-item>
    <v-nav-submenu name="contacts">
      <template slot="title">联系方式</template>
      <v-nav-menu-item name="email">邮箱地址</v-nav-menu-item>
      <v-nav-menu-item name="phone">手机号码</v-nav-menu-item>
      <v-nav-submenu name='social'>
        <template slot="title">社交网站</template>
        <v-nav-menu-item name="website">公司网址</v-nav-menu-item>
        <v-nav-menu-item name="wechat">微信扫码</v-nav-menu-item>
      </v-nav-submenu>
    </v-nav-submenu>
  </v-nav-submenu>
  <v-nav-menu-item name="hire">招聘信息</v-nav-menu-item>
  <v-nav-menu-item name="link">
    <a href="http://www.baidu.com" target="_blank">跳转百度</a>
  </v-nav-menu-item>
</v-nav-menu>
```

### 纵向导航:
垂直菜单，子菜单内嵌在菜单区域。

<ClientOnly>
  <nav-menu-demo2></nav-menu-demo2>
</ClientOnly>

```HTML
<v-nav-menu :selected.sync="selected" vertical>
  <v-nav-menu-item name="home">平台首页</v-nav-menu-item>
  <v-nav-submenu name="about">
    <template slot="title">关于公司</template>
    <v-nav-menu-item name="culture">企业文化</v-nav-menu-item>
    <v-nav-menu-item name="developers">开发团队</v-nav-menu-item>
    <v-nav-submenu name="contacts">
      <template slot="title">联系方式</template>
      <v-nav-menu-item name="email">邮箱地址</v-nav-menu-item>
      <v-nav-menu-item name="phone">手机号码</v-nav-menu-item>
      <v-nav-submenu name='social'>
        <template slot="title">社交网站</template>
        <v-nav-menu-item name="website">公司网址</v-nav-menu-item>
        <v-nav-menu-item name="wechat">微信扫码</v-nav-menu-item>
      </v-nav-submenu>
    </v-nav-submenu>
  </v-nav-submenu>
  <v-nav-menu-item name="hire">招聘信息</v-nav-menu-item>
</v-nav-menu>
```

### v-nav-menu Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
selected | 当前选中的标题，可用.sync修饰符绑定，必填 | String | 必须是 name 中含有的字符串| —
vertical | 设置竖直方向导航，不设置时默认为横向导航 | Boolean | —| false

### v-nav-submenu Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
name | nav-submenu 的唯一标识, 必填 | String | — | —

### v-nav-menu-item Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
name | nav-menu-item 的唯一标识, 必填 | String | — | —


## Pagination - 分页
当数据量过多时，使用分页分解数据。

### 基础用法:
页数较少时的效果。

<ClientOnly>
  <pagination-demo1></pagination-demo1>
</ClientOnly>

⚠️ *<font color='grey' size="2">当总页数为 `9` 页及以下时，分页器页码按钮会全部显示。</font>*

```HTML
<v-pagination :total-page='5'
              :current-page.sync="currentPage"
></v-pagination>
```
```js
data() {
  return {
    currentPage: 1
  }
},
```

### 更多分页:
页数较多时的效果。

<ClientOnly>
  <pagination-demo2></pagination-demo2>
</ClientOnly>

⚠️ *<font color='grey' size="2">当总页数超过 `9` 页时，分页器会隐藏部分页面按钮。</font>*

```HTML
<v-pagination :total-page='50'
              :current-page.sync="currentPage"
></v-pagination>
```

### 只有一页:
页数较多时的效果。

<ClientOnly>
  <pagination-demo3></pagination-demo3>
</ClientOnly>

⚠️ *<font color='grey' size="2">当总页数仅有 `1` 页时，分页器默认会隐藏。如果需要显示仅有一页的分页器按钮，请设置 `:hideIfOnePage="false"`。</font>*

```HTML
<v-pagination :total-page='1'
              :current-page.sync="currentPage"
              :hide-if-one-page="false"
></v-pagination>
```

### v-Pagination Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
total-page | 总页码数, 必填 | Number | — | —
current-page | 当前页数，用.sync修饰符绑定，必填 | Number | — | —
hide-if-one-page | 只有一页时是否隐藏分页器 | Boolean | — | true