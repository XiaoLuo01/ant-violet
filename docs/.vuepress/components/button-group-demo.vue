<template>
  <div style="margin: 30px 0">
    <v-button-group>
      <v-button icon="v-arrow-left">上一页</v-button>
      <v-button>更多</v-button>
      <v-button icon="v-arrow-right" icon-position="right">下一页</v-button>
    </v-button-group>

    <v-button-group>
      <v-button icon="v-arrow-left" primary>Go back</v-button>
      <v-button icon="v-arrow-right" primary icon-position="right">Go forward</v-button>
    </v-button-group>
  </div>
</template>

<script>
import Button from "../../../src/basic/button/button";
import ButtonGroup from "../../../src/basic/button-group/button-group";
export default {
  name: "",
  data() {
    return {
    };
  },
  components: {
    "v-button": Button,
    'v-button-group': ButtonGroup
  }
};
</script>
<style lang="scss" scoped>
.v-button-group {
  margin-right: 10px;
}
</style>