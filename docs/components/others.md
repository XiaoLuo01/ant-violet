---
title: Others 其他
---

##  collapse-transition 动画

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