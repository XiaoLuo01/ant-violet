# Ant-violet

作者: Carol

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，本组件库仅供学习交流，请勿在生产环境中使用。希望对你有帮助...

## 官方文档
[我是链接]()

## 安装

克隆官方仓库或者使用 npm / yarn 安装

```
$ git clone git@github.com:yuyuye958/GuLu-UI.git
    
$ npm install ant-violet --save
$ yarn add ant-violet --save
```

## 使用
如果使用了 npm / yarn 安装，一般在 main.js 中如下配置：
```js
import {Button} from 'ant-violet'
import 'ant-violet/dist/ant-violet.css'

export default {
  name: 'app',
  components: {
    Button
  }
}
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