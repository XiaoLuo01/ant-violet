---
title: Form 表单
---

## Input - 输入框
基础表单组件，支持 `v-model` 绑定和原生事件。

### 使用方法:

<ClientOnly>
  <input-demo1></input-demo1>
</ClientOnly>

```HTML
<v-input placeholder="Basic usage"></v-input>
<v-input disabled value="Disabled usage"></v-input>
<v-input icon="v-login" placeholder="user name"></v-input>
<v-input value="Error usage" error="Error Text!"></v-input>
```

### 双向绑定:

<ClientOnly>
  <input-demo2></input-demo2>
</ClientOnly>

```HTML
<!-- template 内容 -->
<v-input v-model="message"></v-input>
<v-button @click="message+=1">+1</v-button>
<p>您输入的内容为 : {{message}}</p>
```

```js
// data 内容
data() {
  return {
    message: '改变此处的内容'
  }
}
```

### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
value | 绑定的值，可使用 v-model 双向绑定 | String | — | false
placeholder | 占位文本 | String | — | —
disabled | 禁止输入状态 | Boolean | — | false
error | 错误状态，提示错误信息 | String | — | —
icon | 输入框头部图标 | String | — | —

## Cascader - 级联选择器

- 从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。
- 级联选择器对数据有较严格要求，每个数据为一个对象，具有  `value`、`lable`和`children`属性，子集为`children`，以此类推。
- `selected`为当前选中数据`value`值组成的数组，比如 ['北京市', '市辖区', '东城区'] ，按照层级次序排序，使用`.sync`进行绑定。

### 使用方法:

<ClientOnly>
  <cascader-demo></cascader-demo>
</ClientOnly>

```HTML
```

### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
value | 绑定的值，可使用 v-model 双向绑定 | String | — | false
