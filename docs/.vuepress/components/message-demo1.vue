<template>
  <div style="margin: 30px 0">
    <v-button @click="showMessage1">打开消息提示</v-button>
    <v-button @click="showMessage2">居中显示</v-button>
    <v-button @click="showMessage3">支持关闭</v-button>
  </div>
</template>

<script>
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
      this.$message('你的智商需要充值')
    },
    showMessage3() {
      this.$message('这是一条不会自动关闭的提示', {
        autoClose: false,
        closeButton: true
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.button {
  margin-right: 10px;
}
</style>
