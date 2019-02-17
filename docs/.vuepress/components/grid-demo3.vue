<template>
  <div style="margin: 30px 0">
    <v-row>
      <v-col span="10">col-10</v-col>
      <v-col span="10" offset="4">col-10</v-col>
    </v-row>
    <v-row>
      <v-col span="6" offset="6">col-6</v-col>
      <v-col span="6" offset="6">col-6</v-col>
    </v-row>
    <v-row>
      <v-col span="12" offset="6">col-12 col-offset-6</v-col>
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
