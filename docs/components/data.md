---
title: Data 数据展示
---

## Collapse - 折叠面板

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

## Carousel - 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容。

### 基础用法:

<ClientOnly>
  <carousel-demo></carousel-demo>
</ClientOnly>

```HTML
<v-carousel :selected.sync="selected">
  <v-carousel-item name="1">
    <div class="box">1</div>
  </v-carousel-item>
  <v-carousel-item name="2">
    <div class="box">2</div>
  </v-carousel-item>
  <v-carousel-item name="3">
    <div class="box">3</div>
  </v-carousel-item>
</v-carousel>
```
```js
data() {
  return {
    selected: '1'
  };
}
```


###  v-carousel Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
selected | 当前选中 item 的 name 。可以用 .sync 修饰符绑定。 | String | — | —
autoPlay | 是否自动播放 | Boolean | — | true
autoPlayDelay | 自动播放间隔，以 s 为单位 | Number | — | 3

### v-carousel-item Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
name | item 的 name 属性，唯一且必填 | String | — | —

## Table - 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础用法:
基础的表格展示用法。

可设置: 带边框属性 `bordered` 、紧凑样式属性 `compact`、设置 表格的奇偶行背景色 `striped`、排序功能 `order-by`、复选框功能 `checkable`以及加载 `loading` 效果等。

<ClientOnly>
  <table-demo1></table-demo1>
</ClientOnly>

```HTML
<v-table :columns="columns" 
:data-source="dataSource"
:selected-items.sync="selected" 
:order-by.sync="orderBy"
 @update:orderBy="updateData" 
 :loading="loading" 
 striped 
 checkable></v-table>
```
```JS
data() {
  return {
    columns: [
      {text: '姓名', field: 'name', width: 150},
      {text: '年龄', field: 'age', width: 150},
      {text: '地址', field: 'address'}
    ],
    orderBy: {
      name: true,
      age: 'desc'
    },
    loading: false,
    dataSource: [
      {id: 1, name: 'Carol', age: 18, address: '广州市天河区'},
      {id: 2, name: 'Ethon', age: 28, address: '广州市天河区'},
      {id: 3, name: 'Linda', age: 22, address: '上海市普陀区'},
      {id: 4, name: 'Lucy', age: 32, address: '深圳市南山区'},
      {id: 5, name: 'Tom', age: 45, address: '广州市白云区'},
      {id: 6, name: 'Jack', age: 38, address: '长沙市雨花区'}
    ],
    selected: []
  };
},
methods: {
  updateData(value) {
    this.loading = true
    setTimeout(() => {
      // 该方法为一个 ajax 请求，从后端拿取最新排序的数据 
      this.dataSource = this.dataSource.sort((a,b) => a.age - b.age)
      this.loading = false
    },1000)
  }
}
```

### 固定表头:
只要在 `v-table` 元素中定义了 `height` 属性，即可实现固定表头的表格。

<ClientOnly>
  <table-demo2></table-demo2>
</ClientOnly>

```HTML
<v-table :columns="columns" 
:data-source="dataSource" 
:selected-items.sync="selected" 
:height="400"
checkable striped></v-table>
```
```js
data() {
  return {
    columns: [
      {text: '姓名', field: 'name', width: 150},
      {text: '年龄', field: 'age', width: 150},
      {text: '地址', field: 'address'}
    ],
    dataSource: [
      {id: 1, name: 'Carol', age: 18, address: '广州市天河区'},
      {id: 2, name: 'Ethon', age: 28, address: '广州市天河区'},
      {id: 3, name: 'Linda', age: 22, address: '上海市普陀区'},
      {id: 4, name: 'Lucy', age: 32, address: '深圳市南山区'},
      {id: 5, name: 'Tom', age: 45, address: '广州市白云区'},
      {id: 6, name: 'Jack', age: 38, address: '长沙市雨花区'},
      {id: 7, name: 'Carol', age: 18, address: '广州市天河区'},
      {id: 8, name: 'Ethon', age: 28, address: '广州市天河区'},
      {id: 9, name: 'Linda', age: 22, address: '上海市普陀区'},
      {id: 10, name: 'Lucy', age: 32, address: '深圳市南山区'},
      {id: 11, name: 'Tom', age: 45, address: '广州市白云区'},
      {id: 12, name: 'Jack', age: 38, address: '长沙市雨花区'},
      {id: 13, name: 'Carol', age: 18, address: '广州市天河区'},
      {id: 14, name: 'Ethon', age: 28, address: '广州市天河区'},
      {id: 15, name: 'Linda', age: 22, address: '上海市普陀区'},
      {id: 16, name: 'Lucy', age: 32, address: '深圳市南山区'},
      {id: 17, name: 'Tom', age: 45, address: '广州市白云区'},
      {id: 18, name: 'Jack', age: 38, address: '长沙市雨花区'},
      {id: 19, name: 'Carol', age: 18, address: '广州市天河区'},
      {id: 20, name: 'Ethon', age: 28, address: '广州市天河区'}
    ],
    selected: []
  };
},
```

### 可展开、可编辑:
当表格内容较多不能一次性完全展示时。

还可以给最后一列添加操作按钮等。

<ClientOnly>
  <table-demo3></table-demo3>
</ClientOnly>

⚠️ *<font color='grey' size="2">  ️`demo` 中 `template` 中的 `slot-scope` 取到子组件传递过来的所有属性，用来操作相应的功能。</font>*

```HTML
<v-table :columns="columns" 
        :data-source="dataSource"  
        :selected-items.sync="selected"
        expand-field="description">
    <template slot-scope="colData">
      <a href="Javascript:;" style="margin-right:10px;" @click="edit(colData.item)">编辑</a>
      <a href="Javascript:;" @click="view(colData.item)">查看</a>
    </template>
  </v-table>
```
```js
data() {
  return {
    columns: [
      {text: '姓名', field: 'name', width: 100},
      {text: '年龄', field: 'age', width: 100},
      {text: '地址', field: 'address'}
    ],
    dataSource: [
      {id: 1, name: 'Carol', age: 18, address: '广州市天河区', description: 'My name is Carol, I am 18 years old, living in tianhe, guangzhou.'},
      {id: 2, name: 'Ethon', age: 28, address: '广州市天河区', description: 'My name is Ethon, I am 28 years old, living in tianhe, guangzhou.'},
      {id: 3, name: 'Linda', age: 22, address: '上海市普陀区'},
      {id: 4, name: 'Lucy', age: 32, address: '深圳市南山区'},
      {id: 5, name: 'Tom', age: 45, address: '广州市白云区'},
      {id: 6, name: 'Jack', age: 38, address: '长沙市雨花区'}
    ],
    selected: []
  };
},
methods: {
  // 编辑事件
  edit(item) {
    alert(`编辑 ${item.name}`)
  },
  // 查看事件
  view(item) {
    alert(`查看 ${item.name}`)
  }
}
```

### Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
columns | 设置 Table 组件 thead 属性(表头) | Array | — | —
data-source | 渲染 Table 的展示数据 | Array | — | —
bordered | 设置 Table 边框样式 | Boolean | — | false
compact | 设置 Table 紧凑样式 | Boolean | — | false
striped | 设置 Table 奇偶行背景色 | Boolean | — | false
selected-items | checkbox 选择的数据组成的数组，用 .sync 修饰符绑定 | Array | — | —
order-by | 设置字段排序的规则，用 .sync 修饰符绑定 | Array | — | —
loading | 设置 Table 排序时是否有 loading 加载效果 | Boolean | — | false
height | 设置 Table 的高度 | Number | — | —
checkable | 设置 Table 的复选框 checkbox | Boolean | — | false
expend-field | 设置 Table 展开行的显示内容 | String | — | —
slot-scope | 在 Table 中设置按钮等功能 | — | — | —

⚠️ *<font color='grey' size="2"> 设置 `column` 时必须要指定 `width` 属性，否则列头和内容可能不对齐。如果指定 `width` 不生效，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有<font color='#096dd9' size="2">超长连续字段破坏布局</font>。</font>*

⚠️ *<font color='grey' size="2"> `data-source` 中的数据配置必须要传 `id`。</font>*

⚠️ *<font color='grey' size="2"> `demo` 中的排序功能模拟 `loading` 效果，正常使用场景需要后端做排序，请求接口重新渲染。</font>*