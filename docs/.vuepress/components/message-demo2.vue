<template>
  <div style="margin: 30px 0">
    <v-button>支持 HTML 片段</v-button>
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
