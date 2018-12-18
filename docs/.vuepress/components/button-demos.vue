<template>
  <div style="margin: 30px 0">
    <v-button>默认按钮</v-button>
    <v-button icon="setting">默认按钮</v-button>
    <v-button :loading="true">默认按钮</v-button>
    <v-button disabled>默认按钮</v-button>

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
