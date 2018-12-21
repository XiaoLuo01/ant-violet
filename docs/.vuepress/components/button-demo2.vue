<template>
  <div style="margin: 30px 0">
    <v-button icon="v-download" primary>Download</v-button>
    <v-button icon="v-upload" icon-position="right">Download</v-button>
    <v-button loading>Loading</v-button>
    <v-button icon="v-search" :loading="loading" @click="loading = !loading">Click me!</v-button>

  </div>
</template>

<script>
import Button from "../../../src/basic/button/button";
export default {
  name: "",
  data() {
    return {
      loading: false
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
