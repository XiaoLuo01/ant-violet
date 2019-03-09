<template>
  <div style="margin: 30px 0">
    <v-popover trigger="click">
      <template slot="content">
        <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。dsadsadfafdgfdhgfshsfhgfhfgxhsfhgsfafgdgfdgad</div>
      </template>
      <v-button>click 激活</v-button>
    </v-popover>
    <v-popover trigger="hover">
      <template slot="content">
        <div>这是 hover 触发的内容</div>
      </template>
      <v-button>hover 激活</v-button>
    </v-popover>
    <v-popover trigger="click">
      <template slot="content" slot-scope="{close}">
        <div>这是内容显示 <v-button @click="close">关闭</v-button></div>
      </template>
      <v-button>点击浮窗里面关闭</v-button>
    </v-popover>
  </div>
</template>

<script>
import Button from "../../../src/basic/button/button";
import Popover from "../../../src/others/popover/popover";
export default {
  name: "",
  data() {
    return {
    };
  },
  components: {
    "v-button": Button,
    'v-popover': Popover
  }
};
</script>
<style lang="scss" scoped>
.button {
  margin-right: 10px;
}
</style>
