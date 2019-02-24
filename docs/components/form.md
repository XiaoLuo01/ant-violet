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