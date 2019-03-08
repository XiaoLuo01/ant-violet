<template>
  <div style="margin: 30px 0">
    <v-button @click="openHTML">支持 HTML 片段</v-button>
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
    openHTML() {
      this.$message('<strong>这是 <i>HTML</i> 片段</strong>', {
        enableHtml: true
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
