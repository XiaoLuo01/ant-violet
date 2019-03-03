---
title: Navigation 导航
---

## Tabs 标签页
分隔内容上有关联但属于不同类别的数据集合。

### 基础用法:

<ClientOnly>
  <tabs-demo1></tabs-demo1>
</ClientOnly>

```
```

### v-tabs Attributes
参数 | 说明 | 类型 | 可选值 | 默认值
:-:| :-: | :-: | :-: | :-: 
selected | 当前选中的标签名，可用.sync修饰符绑定，必填 | String | — | —
direction | 选项卡所在位置 | String | top, right, bottom, left | top