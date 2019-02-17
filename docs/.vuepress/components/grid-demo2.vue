<template>
  <div style="margin: 30px 0">
    <v-row gutter="10">
      <v-col span="12">col-12</v-col>
      <v-col span="12">col-12</v-col>
    </v-row>
    <v-row gutter="10">
      <v-col span="6">col-6</v-col>
      <v-col span="6">col-6</v-col>
      <v-col span="6">col-6</v-col>
      <v-col span="6">col-6</v-col>
    </v-row>
  </div>
</template>

<script>
import Col from "../../../src/layout/grid/col";
import Row from "../../../src/layout/grid/row";
export default {
  name: "",
  data() {
    return {
    };
  },
  components: {
    "v-col": Col,
    "v-row": Row
  }
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.v-row {
  margin: 10px 0;
}
</style>
