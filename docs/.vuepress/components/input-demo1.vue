<template>
  <div style="margin: 30px 0">
    <v-input placeholder="Basic usage"></v-input>
    <v-input disabled value="Disabled usage"></v-input>
    <v-input icon="v-login" placeholder="user name"></v-input>
    <v-input value="Error usage" error="Error Text!"></v-input>
  </div>
</template>

<script>
import Input from "../../../src/form/input/input";
export default {
  name: "",
  data() {
    return {
    };
  },
  components: {
    "v-input": Input
  }
};
</script>
<style lang="scss" scoped>
.v-input-wrapper {
  margin-right: 10px;
}
.v-input-wrapper.error {
  margin-top: 30px;
}
</style>