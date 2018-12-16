# 快速上手
在使用 `ant-violet` 之前，我假设你已经了解 `Vue、Vue组件、Vue单文件组件` 的基础知识。

## 使用 vue-cli@3
以 `vue-cli` 为例介绍如何在项目中使用 `ant-violet` 的组件，你可以用它们快速地实现一些常用组件的效果。
`vue-cli` 的搭建步骤请参见官网文档 [Vue CLI 3](https://cli.vuejs.org/zh/guide/) 。

## 引入并配置

### 完整引入
在入口 `main.js` 文件中如下配置：
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
以上代码便完成了 `ant-violet` 的引入，可以在组件中直接使用了。需要注意的是，样式文件需要单独引入。

### 按需引入
如果你只希望引入部分组件，比如 `Button` 和 `Icon`，那么需要在 `main.js` 中写入以下内容：
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
在使用 `ant-violet` 时，为避免影响组件样式，请使用 `border-box` 盒模型：
```css
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```