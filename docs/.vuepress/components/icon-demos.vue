<template>
  <div style="margin: 30px 0">
    <div id="icons-demo">
      <v-icon name="setting"></v-icon>
    </div>

    <pre style="margin: 30px 0"><code>{{content}}</code></pre>

  </div>
</template>
<script>
import Icon from "../../../src/basic/icon/icon";
export default {
  components: {
    "v-icon": Icon
  },
  data() {
    return {
      content: `
        <v-icon name="setting"></v-icon>
        `.replace(/ {4}/gm, "")
        .trim()
    };
  }
};
</script>
<style lang="scss">
#icons-demo {
  svg {
    width: 2em;
    height: 2em;
    margin-right: 1.5em;
  }
}
table {
  width: 100%;
  display: table;
}
</style>