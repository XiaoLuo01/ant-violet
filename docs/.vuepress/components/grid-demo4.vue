<template>
  <div style="margin: 30px 0">
    <v-row>
        <v-col
          span="24"
          :ipad="{span:12}"
          :narrow-pc="{span:8}"
          :pc="{span:6}"
          :wide-pc="{span:4}"
        >
          内容1
        </v-col>
        <v-col
          span="24"
          :ipad="{span:12}"
          :narrow-pc="{span:8}"
          :pc="{span:6}"
          :wide-pc="{span:4}"
        >
          内容2
        </v-col>
        <v-col
          span="24"
          :ipad="{span:12}"
          :narrow-pc="{span:8}"
          :pc="{span:6}"
          :widePc="{span:4}"
        >
          内容3
        </v-col>
        <v-col
          span="24"
          :ipad="{span:12}"
          :narrow-pc="{span:8}"
          :pc="{span:6}"
          :widePc="{span:4}"
        >
          内容4
        </v-col>
        <v-col
          span="24"
          :ipad="{span:12}"
          :narrow-pc="{span:8}"
          :pc="{span:6}"
          :widePc="{span:4}"
        >
          内容5
        </v-col>
        <v-col
          span="24"
          :ipad="{span:12}"
          :narrow-pc="{span:8}"
          :pc="{span:6}"
          :widePc="{span:4}"
        >
          内容6
        </v-col>
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
.v-row {
  margin: 10px 0;
}
</style>
