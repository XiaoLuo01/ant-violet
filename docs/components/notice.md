---
title: Notice 反馈
---

## Message - 消息提示

常用于主动操作后的反馈提示。

### 基础用法:

从顶部出现，3 秒后自动消失。可以添加关闭按钮。

<ClientOnly>
  <message-demo1></message-demo1>
</ClientOnly>

```HTML
<v-button @click="showMessage1">打开消息提示</v-button>
<v-button @click="showMessage2">居中显示</v-button>
<v-button @click="showMessage3">支持关闭</v-button>
```
```js
import Button from "../../../src/basic/button/button";
import Plugin from "../../../src/notice/message/index"
import Message from '../../../src/notice/message/message'
import Vue from 'vue'
Vue.use(Plugin)

export default {
  name: "",
  data() {
    return {
    };
  },
  components: {
    "v-button": Button
  },
  methods: {
    showMessage1() {
      this.$message('你的智商需要充值')
    },
    showMessage2() {
      this.$message('你的智商需要充值', {
        position: 'middle'
      })
    },
    showMessage3() {
      this.$message('这是一条不会自动关闭的提示', {
        autoClose: false,
        closeButton: true
      })
    }
  }
};
```

### 支持 HTML 片段:

`message` 属性支持传入 `HTML` 片段

<ClientOnly>
  <message-demo2></message-demo2>
</ClientOnly>

```HTML
<v-button @click="openHTML">支持 HTML 片段</v-button>
```
```js
methods: {
  openHTML() {
    this.$message('<strong>这是 <i>HTML</i> 片段</strong>', {
      enableHtml: true
    })
  }
}
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