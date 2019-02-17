---
title: layout 布局
---

## Grid 栅格
通过基础的24格分栏，快速构建网页布局。

### 基础用法
`<v-row>` 行，`<v-col>` 列，通过 `span` 属性设置每一格的宽度，所有列（`<v-col>`）必须放在 `<v-row>` 内。

<ClientOnly>
  <grid-demo1></grid-demo1>
</ClientOnly>

```HTML
<v-row>
  <v-col span="12">col-12</v-col>
  <v-col span="12">col-12</v-col>
</v-row>

<v-row>
  <v-col span="8">col-8</v-col>
  <v-col span="8">col-8</v-col>
  <v-col span="8">col-8</v-col>
</v-row>

<v-row>
  <v-col span="6">col-6</v-col>
  <v-col span="6">col-6</v-col>
  <v-col span="6">col-6</v-col>
  <v-col span="6">col-6</v-col>
</v-row>
```

### 区块间隔
栅格常常需要和间隔进行配合，你可以使用 `<v-row>` 的 `gutter` 属性

<ClientOnly>
  <grid-demo2></grid-demo2>
</ClientOnly>

```HTML
```

### 左右偏移
`offset` 属性可设置偏移的格子数。

<ClientOnly>
  <grid-demo3></grid-demo3>
</ClientOnly>

```HTML
```

### 响应式布局
实现响应式布局，根据需求可设置四个参数：`pad`、`narrow-pc`、`pc` 和 `large-pc`，而 `span` 是作为 `phone` 默认参数。

<ClientOnly>
  <grid-demo4></grid-demo4>
</ClientOnly>

```HTML
```

### v-row Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
name | icon 图标名 | String | — | —

### v-col Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
span | 栅格所占宽度的默认配置参数 | Number, String | — | —

## Layout 布局