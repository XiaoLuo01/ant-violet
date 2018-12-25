<template>
  <div style="margin: 30px 0">
    <v-input v-model="message"></v-input>
    <v-button @click="message+=1">+1</v-button>
    <p>您输入的内容为 : {{message}}</p>
  </div>
</template>

<script>
import Input from "../../../src/form/input/input";
import Button from "../../../src/basic/button/button";
export default {
  name: "",
  data() {
    return {
      message: '改变此处的内容'
    };
  },
  components: {
    "v-input": Input,
    "v-button": Button
  }
};
</script>
<style lang="scss" scoped>
.v-input-wrapper {
  margin-right: 10px;
}
</style>