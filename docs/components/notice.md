---
title: Notice 反馈
---

## Message 消息提示

常用于主动操作后的反馈提示。

### 基础用法:

从顶部出现，3 秒后自动消失。可以添加关闭按钮。

<ClientOnly>
  <message-demo1></message-demo1>
</ClientOnly>

```HTML
```

### 支持 HTML 片段:

`message` 属性支持传入 `HTML` 片段

<ClientOnly>
  <message-demo2></message-demo2>
</ClientOnly>

```HTML
```

### 全局方法:

Message 组件是以插件的方式引入的，它会为 `Vue.prototype` 添加全局方法 `$message`。 因此在 `Vue` 实例中可以采用本页面中的方式调用。

### Options
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
position | 消息提示的位置，默认顶部 | String | top, middle | top
autoClose | 消息提示是否自动关闭，默认关闭 | Boolean | — | true
autoCloseDelay | 消息提示自动关闭的等待时间，默认3秒 | Number | — | 3
enableHtml | 消息文本是否支持HTML，默认不支持 | Boolean | — | false
closeButton | 显示关闭按钮, 默认不显示 | Boolean | — | false