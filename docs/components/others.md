---
title: Others 其他
---

##  popover - 弹出框

常用于展示鼠标 `hover` 或者 `click` 时的提示信息。

### 基础用法:

<ClientOnly>
  <popover-demo1></popover-demo1>
</ClientOnly>

```HTML
<v-popover trigger="click">
  <template slot="content">
    <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。dsadsadfafdgfdhgfshsfhgfhfgxhsfhgsfafgdgfdgad</div>
  </template>
  <v-button>click 激活</v-button>
</v-popover>

<v-popover trigger="hover">
  <template slot="content">
    <div>这是 hover 触发的内容</div>
  </template>
  <v-button>hover 激活</v-button>
</v-popover>

<v-popover trigger="click">
  <template slot="content" slot-scope="{close}">
    <div>这是内容显示 <v-button @click="close">关闭</v-button></div>
  </template>
  <v-button>点击浮窗里面关闭</v-button>
</v-popover>
```

### 四种方向:

<ClientOnly>
  <popover-demo2></popover-demo2>
</ClientOnly>

```HTML
<v-popover position='left'>
  <template slot="content">
    <div>这是左方显示的内容</div>
  </template>
  <v-button>左方</v-button>
</v-popover>

<v-popover position='top'>
  <template slot="content">
    <div>这是上方显示的内容</div>
  </template>
  <v-button>上方</v-button>
</v-popover>

<v-popover position='bottom'>
  <template slot="content">
    <div>这是下方显示的内容</div>
  </template>
  <v-button>下方</v-button>
</v-popover>

<v-popover position='right'>
  <template slot="content">
    <div>这是右方显示的内容</div>
  </template>
  <v-button>右方</v-button>
</v-popover>
```

### Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
position | 弹出框的位置，默认顶部 | String | top, right, bottom, left	 | top
trigger | 弹出框的触发方式，默认点击触发 | String | click, hover | click


##  collapse-transition - 动画

用于提供水平和垂直方向展开收起动画功能的小组件。

### 基础用法:

<ClientOnly>
  <transition-demo></transition-demo>
</ClientOnly>

```HTML
<div style="margin: 30px 0">
  <v-button @click="visible = !visible">纵向展开 / 收起</v-button>
  <v-collaspe-transition :visible="visible" duration="500">
    <div class="transition-box">collapse-transition</div>
  </v-collaspe-transition>
</div>
<div style="margin: 30px 0">
  <v-button @click="visible1 = !visible1">横向展开 / 收起</v-button>
  <v-collaspe-transition :visible="visible1" horizontal duration="800">
    <div class="transition-box">collapse-transition</div>
  </v-collaspe-transition>
</div>
```

```js
data() {
  return {
    visible: true,
    visible1: true
  };
},
```

```css
.transition-box {
  margin-top: 20px;
  width: 300px;
  height: 200px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding-top: 85px;
  box-sizing: border-box;
  margin-right: 20px;
}
```

### Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
visible | 控制内容的展开和收起，可动态绑定，必填。 | Boolean | — | —
horizontal | 横向展开和收起，默认为纵向。 | Boolean | — | false
duration | 动画持续时间，单位为 ms | String , Number | — | 300