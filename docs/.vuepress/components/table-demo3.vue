<template>
  <div style="margin: 30px 0">
    <v-table :columns="columns" :data-source="dataSource"  :selected-items.sync="selected" expand-field="description">
      <template slot-scope="colData">
        <a href="Javascript:;" style="margin-right:10px;" @click="edit(colData.item)">编辑</a>
        <a href="Javascript:;" @click="view(colData.item)">查看</a>
      </template>
    </v-table>
  </div>
</template>

<script>
import Table from "../../../src/data/table/table";
export default {
  name: "",
  data() {
    return {
      columns: [
        {text: '姓名', field: 'name', width: 100},
        {text: '年龄', field: 'age', width: 100},
        {text: '地址', field: 'address'}
      ],
      dataSource: [
        {id: 1, name: 'Carol', age: 18, address: '广州市天河区', description: 'My name is Carol, I am 18 years old, living in tianhe, guangzhou.'},
        {id: 2, name: 'Ethon', age: 28, address: '广州市天河区', description: 'My name is Ethon, I am 28 years old, living in tianhe, guangzhou.'},
        {id: 3, name: 'Linda', age: 22, address: '上海市普陀区'},
        {id: 4, name: 'Lucy', age: 32, address: '深圳市南山区'},
        {id: 5, name: 'Tom', age: 45, address: '广州市白云区'},
        {id: 6, name: 'Jack', age: 38, address: '长沙市雨花区'}
      ],
      selected: []
    };
  },
  components: {
    "v-table": Table
  },
  methods: {
    // 编辑事件
    edit(item) {
      alert(`编辑 ${item.name}`)
    },
    // 查看事件
    view(item) {
      alert(`查看 ${item.name}`)
    }
  }
};
</script>
<style lang="scss" scoped>

</style>