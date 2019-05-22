<template>
  <div style="margin: 30px 0">
    <v-table :columns="columns" :data-source="dataSource" checkable striped  :selected-items.sync="selected" :height="400"></v-table>
  </div>
</template>

<script>
import Table from "../../../src/data/table/table";
export default {
  name: "",
  data() {
    return {
      columns: [
        {text: '姓名', field: 'name', width: 150},
        {text: '年龄', field: 'age', width: 150},
        {text: '地址', field: 'address'}
      ],
      orderBy: {
        name: true,
        age: 'desc'
      },
      loading: false,
      dataSource: [
        {id: 1, name: 'Carol', age: 18, address: '广州市天河区'},
        {id: 2, name: 'Ethon', age: 28, address: '广州市天河区'},
        {id: 3, name: 'Linda', age: 22, address: '上海市普陀区'},
        {id: 4, name: 'Lucy', age: 32, address: '深圳市南山区'},
        {id: 5, name: 'Tom', age: 45, address: '广州市白云区'},
        {id: 6, name: 'Jack', age: 38, address: '长沙市雨花区'},
        {id: 7, name: 'Carol', age: 18, address: '广州市天河区'},
        {id: 8, name: 'Ethon', age: 28, address: '广州市天河区'},
        {id: 9, name: 'Linda', age: 22, address: '上海市普陀区'},
        {id: 10, name: 'Lucy', age: 32, address: '深圳市南山区'},
        {id: 11, name: 'Tom', age: 45, address: '广州市白云区'},
        {id: 12, name: 'Jack', age: 38, address: '长沙市雨花区'},
        {id: 13, name: 'Carol', age: 18, address: '广州市天河区'},
        {id: 14, name: 'Ethon', age: 28, address: '广州市天河区'},
        {id: 15, name: 'Linda', age: 22, address: '上海市普陀区'},
        {id: 16, name: 'Lucy', age: 32, address: '深圳市南山区'},
        {id: 17, name: 'Tom', age: 45, address: '广州市白云区'},
        {id: 18, name: 'Jack', age: 38, address: '长沙市雨花区'},
        {id: 19, name: 'Carol', age: 18, address: '广州市天河区'},
        {id: 20, name: 'Ethon', age: 28, address: '广州市天河区'}
      ],
      selected: []
    };
  },
  components: {
    "v-table": Table
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>

</style>