<template>
  <div style="margin: 30px 0">
    <v-popover position='left'>
      <template slot="content">
        <div>这是左方显示的内容</div>
      </template>
      <v-button>左方</v-button>
    </v-popover>
    <v-popover position='top'>
      <template slot="content">
        <div>这是上方显示的内容</div>
      </template>
      <v-button>上方</v-button>
    </v-popover>
    <v-popover position='bottom'>
      <template slot="content">
        <div>这是下方显示的内容</div>
      </template>
      <v-button>下方</v-button>
    </v-popover>
    <v-popover position='right'>
      <template slot="content">
        <div>这是右方显示的内容</div>
      </template>
      <v-button>右方</v-button>
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
