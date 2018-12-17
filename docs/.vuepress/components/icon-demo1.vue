<template>
  <div style="margin: 30px 0">
    <div id="icons-demo">
      <v-icon name="v-edit"></v-icon>
      <v-icon name="v-share"></v-icon>
      <v-icon name="v-delete"></v-icon>
      <div class="button"><v-button icon="v-search">搜索</v-button></div>
    </div>

    <pre style="margin: 30px 0"><code>{{content}}</code></pre>

  </div>
</template>
<script>
import Icon from "../../../src/basic/icon/icon";
import Button from "../../../src/basic/button/button";
export default {
  components: {
    "v-icon": Icon,
    "v-button": Button
  },
  data() {
    return {
      content: `
        <v-icon name="v-edit"></v-icon>
        <v-icon name="v-share"></v-icon>
        <v-icon name="v-delete"></v-icon>
        <v-button icon="v-search">搜索</v-button>
        `.replace(/ {4}/gm, "")
        .trim()
    };
  }
};
</script>
<style lang="scss">
#icons-demo {
  display: flex;
  > svg {
    margin-top: 8px;
  }
  > .button {
    margin: 0 20px;
  }
}
table {
  width: 100%;
  display: table;
}
</style>