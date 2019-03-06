<template>
  <div>
    <div style="margin: 30px 0">
      <v-button @click="visible = !visible">纵向展开 / 收起</v-button>
      <v-collaspe-transition :visible="visible" duration="500">
        <div class="transition-box">collapse-transition</div>
      </v-collaspe-transition>
    </div>
    <div style="margin: 30px 0">
      <v-button @click="visible1 = !visible1">横向展开 / 收起</v-button>
      <v-collaspe-transition :visible="visible1" horizontal duration="800">
        <div class="transition-box">collapse-transition</div>
      </v-collaspe-transition>
    </div>
  </div>
</template>

<script>
import CollaspeTransition from "../../../src/others/collapse-transition/collapse-transition";
import Button from "../../../src/basic/button/button";
export default {
  name: "",
  data() {
    return {
      visible: true,
      visible1: true
    };
  },
  components: {
    "v-collaspe-transition": CollaspeTransition,
    "v-button": Button
  }
};
</script>
<style lang="scss" scoped>
.button {
  margin-bottom: 20px;
}
.transition-box {
  width: 300px;
  height: 200px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding-top: 85px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>