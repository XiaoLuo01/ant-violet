# Ant-violet

作者: Carol

[![Build Status](https://www.travis-ci.org/XiaoLuo01/ant-violet.svg?branch=master)](https://www.travis-ci.org/XiaoLuo01/ant-violet)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，本组件库仅供学习交流，请勿在生产环境中使用。希望对你有帮助...

## 官方文档
[我是链接]()

## 安装

克隆官方仓库或者使用 npm / yarn 安装

```
$ git clone https://github.com/XiaoLuo01/ant-violet.git
    
$ npm install ant-violet --save
$ yarn add ant-violet --save
```

## 使用
### 完整引入
如果使用了 npm / yarn 安装，一般在 main.js 中如下配置：
```js
import Vue from 'vue'
import App from './app.vue'
import antV from 'ant-violet'
import 'ant-violet/dist/ant-violet.css'

Vue.use(antV)
new Vue({
  el: '#app',
  render: h => h(App)
})
```
以上代码便完成了 ant-violet 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入
如果你只希望引入部分组件，比如 Button 和 Icon，那么需要在 main.js 中写入以下内容：
```js
import Vue from 'vue';
import App from './App.vue';
import { Button, Icon } from 'ant-violet';
import 'ant-violet/dist/ant-violet.css'

Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Icon)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 特别提醒
使用 ant-violet 时，您需要使用 border-box 盒模型，否则会影响样式。CSS 代码示例：

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

## 联系方式
Email: 1428620591@qq.com

如果您觉得还不错，请 star