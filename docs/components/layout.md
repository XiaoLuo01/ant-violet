---
title: Layout 布局
---

## Grid 栅格
通过基础的24格分栏，快速构建网页布局。

### 基础用法:
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

### 区块间隔:
栅格常常需要和间隔进行配合，你可以使用 `<v-row>` 的 `gutter` 属性

<ClientOnly>
  <grid-demo2></grid-demo2>
</ClientOnly>

```HTML
<v-row gutter="10">
  <v-col span="12">col-12</v-col>
  <v-col span="12">col-12</v-col>
</v-row>
<v-row gutter="10">
  <v-col span="6">col-6</v-col>
  <v-col span="6">col-6</v-col>
  <v-col span="6">col-6</v-col>
  <v-col span="6">col-6</v-col>
</v-row>
```

### 左右偏移:
`offset` 属性可设置偏移的格子数。

<ClientOnly>
  <grid-demo3></grid-demo3>
</ClientOnly>

```HTML
<v-row>
  <v-col span="10">col-10</v-col>
  <v-col span="10" offset="4">col-10</v-col>
</v-row>
<v-row>
  <v-col span="6" offset="6">col-6</v-col>
  <v-col span="6" offset="6">col-6</v-col>
</v-row>
<v-row>
  <v-col span="12" offset="6">col-12 col-offset-6</v-col>
</v-row>
```

### 响应式布局:
实现响应式布局，根据需求可设置四个参数：`ipad`、`narrow-pc`、`pc` 和 `wide-pc`，而 `span` 是作为 `phone` 默认参数。

<ClientOnly>
  <grid-demo4></grid-demo4>
</ClientOnly>

```HTML
<v-row>
  <v-col
    span="24"
    :ipad="{span:12}"
    :narrow-pc="{span:8}"
    :pc="{span:6}"
    :wide-pc="{span:4}"
  >
    内容1
  </v-col>
  <v-col
    span="24"
    :ipad="{span:12}"
    :narrow-pc="{span:8}"
    :pc="{span:6}"
    :wide-pc="{span:4}"
  >
    内容2
  </v-col>
  <v-col
    span="24"
    :ipad="{span:12}"
    :narrow-pc="{span:8}"
    :pc="{span:6}"
    :widePc="{span:4}"
  >
    内容3
  </v-col>
  <v-col
    span="24"
    :ipad="{span:12}"
    :narrow-pc="{span:8}"
    :pc="{span:6}"
    :widePc="{span:4}"
  >
    内容4
  </v-col>
  <v-col
    span="24"
    :ipad="{span:12}"
    :narrow-pc="{span:8}"
    :pc="{span:6}"
    :widePc="{span:4}"
  >
    内容5
  </v-col>
  <v-col
    span="24"
    :ipad="{span:12}"
    :narrow-pc="{span:8}"
    :pc="{span:6}"
    :widePc="{span:4}"
  >
    内容6
  </v-col>
</v-row>
```

### v-row Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
gutter | 栅格的间隙 | Number, String | — | —
align | 栅格内容的对齐方向 | String | left, right, center | —

### v-col Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
span | 栅格所占宽度的默认配置参数 | Number, String | — | —
offset | 栅格的偏移 | Number, String | — | —

## Layout 布局

容器布局，可快速搭建页面的基本结构，需浏览器支持 `flex` 布局。在使用容器布局时，container组件的子组件只能是 `header` ， `main` ， `footer` ， `sider` 或 `container` ，同时，上述子组件的父组件也只能是 `container` 。

### 基础用法:

<ClientOnly>
  <container-demo></container-demo>
</ClientOnly>

```HTML
<v-layout>
  <v-header> 
    <div class="header-demo demo">Header</div>
  </v-header>
  <v-content>
    <div class="content-demo demo">Content</div>
  </v-content>
  <v-footer>
    <div class="footer-demo demo">Footer</div>
  </v-footer>
</v-layout>

<v-layout>
  <v-header>
    <div class="header-demo demo">Header</div>
  </v-header>
  <v-layout>
    <v-sider>
      <div class="sider-demo demo">sider</div>
    </v-sider>
    <v-content>
      <div class="content-demo demo">Content</div>
    </v-content>
  </v-layout>
  <v-footer>
    <div class="footer-demo demo">Footer</div>
  </v-footer>
</v-layout>

<v-layout>
  <v-sider>
    <div class="sider-demo sider-demo1 demo">sider</div>
  </v-sider>

  <v-layout>
    <v-header>
      <div class="header-demo demo">Header</div>
    </v-header>
    <v-layout>
      <v-sider>
        <div class="sider-demo demo">sider</div>
      </v-sider>
      <v-content>
        <div class="content-demo demo">Content</div>
      </v-content>
    </v-layout>
    <v-footer>
      <div class="footer-demo demo">Footer</div>
    </v-footer>
  </v-layout>
</v-layout>
```

```CSS
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-demo, .footer-demo {
  height: 50px;
  background: #7dbcea;
  color: #fff;
}
.content-demo {
  min-height: 120px;
  background: rgba(16, 142, 233, 1);
  color: #fff;
}
.sider-demo {
  background-color: #3ba0e9;
  min-height: 120px;
  width: 100px;
  color: #fff;
}
.sider-demo1 {
  height: 100%;
  background-color: #5aabe5;
}
```