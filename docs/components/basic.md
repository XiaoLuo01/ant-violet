---
title: Basic 通用
---

## Icon - 图标
提供一些常用图标集合。

### 使用方法

<ClientOnly>
  <icon-demo1></icon-demo1>
</ClientOnly>

```HTML
<v-icon name="v-edit"></v-icon>
<v-icon name="v-share"></v-icon>
<v-icon name="v-delete"></v-icon>
<v-button icon="v-search">搜索</v-button>
```

### Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
name | icon 图标名 | String | —— | ——


### 图标集合
<ClientOnly>
  <icon-demo2></icon-demo2>
</ClientOnly>

## Button - 按钮
常用的按钮组件，点击触发事件。

### 基础用法:

<ClientOnly>
  <button-demo1></button-demo1>
</ClientOnly>

```HTML
<v-button>Default</v-button>
<v-button primary>Primary</v-button>
<v-button dashed>Dashed</v-button>
<v-button danger>Danger</v-button>
<v-button disabled>Disabled</v-button>
```

### 图标按钮、加载按钮

<ClientOnly>
  <button-demo2></button-demo2>
</ClientOnly>

```HTML
<v-button icon="v-download" primary>Download</v-button>
<v-button icon="v-upload" icon-position="right">Download</v-button>
<v-button loading>Loading</v-button>
<v-button icon="v-search" :loading="loading" @click="loading=!loading">Click me!</v-button>
```

### Attributes
组件将被渲染为 `button` 标签，因此你可以使用所有的 `button` 原生属性。

参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
icon | icon 图标名 | String | —— | ——
icon-position | icon 位置 | String | left, right | left
primary | 主题色按钮 | Boolean | —— | false
dashed | 虚线按钮 | Boolean | —— | false
danger | 危险按钮 | Boolean | —— | false
disabled | 禁用按钮 | Boolean | —— | false
loading | 带 loading 效果的按钮 | Boolean | —— | false

## ButtonGroup - 组合按钮
横向排列的按钮组合。

<ClientOnly>
  <button-group-demo></button-group-demo>
</ClientOnly>

```HTML
<v-button-group>
  <v-button icon="v-arrow-left">上一页</v-button>
  <v-button>更多</v-button>
  <v-button icon="v-arrow-right" icon-position="right" >下一页</v-button>
</v-button-group>

<v-button-group>
  <v-button icon="v-arrow-left" primary>Go back</v-button>
  <v-button icon="v-arrow-right" primary icon-position="right">Go forward</v-button>
</v-button-group>
```