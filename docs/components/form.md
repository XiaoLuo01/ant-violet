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

### 静态数据:

使用组件 `data` 中的静态数据

<ClientOnly>
  <cascader-demo1></cascader-demo1>
</ClientOnly>

```HTML
<v-cascader 
  :source.sync="source" 
  popover-height='200px' 
  :selected.sync="selected" 
></v-cascader>
```

```js
// 静态 data 数据结构

data() {
  return {
    // 被选中
    selected: [],
    // 整体数据结构
    source: [
      {
        name: "浙江",
        children: [
          {
            name: "杭州",
            children: [{ name: "上城区" }, { name: "下城区" }]
          }
        ]
      },
      {
        name: "湖南",
        children: [
          {
            name: "长沙",
            children: [
              { name: "雨花区" },
              { name: "芙蓉区" },
              { name: "岳麓区" }
            ]
          },
          {
            name: "衡阳",
            children: [
              { name: "蒸湘区" },
              { name: "雁峰区" },
              { name: "珠晖区" }
            ]
          }
        ]
      },
      {
        name: "广东",
        children: [
          {
            name: "广州",
            children: [
              { name: "天河区" },
              { name: "白云区" },
              { name: "越秀区" }
            ]
          }
        ]
      }
    ]
  };
}
```

### 动态获取:

使用 `ajax` 从后端动态获取 `source` 数据。每次选择都会进行请求，并进行 `loading` 提示。

⚠️ *<font color='grey' size="2">使用动态获取的方式建议在选择器容量非常大的时候再进行使用。因需严格统一后端传递来的 `JSON` 数据格式，较为繁琐。因此若数据量较少，推荐使用静态方式。</font>*


<ClientOnly>
  <cascader-demo2></cascader-demo2>
</ClientOnly>

```HTML
<v-cascader
  :source.sync="source"
  popover-height='200px'
  :selected.sync="selected"
  :load-data="loadData"
></v-cascader>
```
后端请求到的数据结构如下
```json
[
  {
    "id": 1,
    "name": "北京",
    "parent_id": 0,
    "simpleCN": "bj",
    "CN": "beijing"
  },
  ...
  {
    "id": 40,
    "name": "朝阳",
    "parent_id": 1,
    "simpleCN": "cy",
    "CN": "chaoyang"
  },
  {
    "id": 41,
    "name": "丰台",
    "parent_id": 1,
    "simpleCN": "ft",
    "CN": "fengtai"
  },
  ...
]
```

动态获取 请求相关 JS
```js
// ajax 请求
function ajax(parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id === parentId);
      // 去数据库查找当前节点是否有 children 
      result.forEach(node => {
        if(db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        } else {
          node.isLeaf = true
        }
      })
      resolve(result)
    }, 300)
  })
}

export default {
  name: "",
  data() {
    return {
      // 被选中
      selected: [],
      // 整体数据结构
      source: []
    };
  },
  components: {
    "v-button": Button,
    "v-cascader": Cascader
  },
  created() {
    // ajax 动态获取
    ajax(0).then(res => {
      this.source = res;
    })
  },
  methods: {
    // loadData 传入
    loadData({id}, updateSource) {
      ajax(id).then((res) => {
        console.log(res)
        updateSource(res)
      })
    }
  }
};
```

### Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
source | 静态数据组成的数组，用 .sync 修饰符绑定 | Array | — | —
selected | 当前选择器选择的数据组成的数组，用 .sync 修饰符绑定 | Array | — | —
popover-height | 选择器弹出 popover 容器高度设置属性 | String | — | 150px
:load-data | 设置请求并传入到组件内部的函数 | Function | — | —