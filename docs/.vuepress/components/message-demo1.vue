<template>
  <div style="margin: 30px 0">
    <v-button>打开消息提示</v-button>
    <v-button>支持关闭</v-button>
    <v-button>支持回调</v-button>
  </div>
</template>

<script>
import Button from "../../../src/basic/button/button";
export default {
  name: "",
  data() {
    return {
    };
  },
  components: {
    "v-button": Button
  }
};
</script>
<style lang="scss" scoped>
.button {
  margin-right: 10px;
}
</style>
