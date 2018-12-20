<template>
  <div style="margin: 30px 0">
    <v-button>Default</v-button>
    <v-button primary>Primary</v-button>
    <v-button dashed>Dashed</v-button>
    <v-button danger>Danger</v-button>
    <v-button disabled>Disabled</v-button>

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
