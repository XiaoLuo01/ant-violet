<template>
  <div id="app">
    <div class="box">
      <v-icon name="setting"></v-icon>
    </div>
  </div>
</template>

<script>
import Icon from "./basic/icon/icon";
export default {
  name: 'app',
  components: {
    'v-icon': Icon
  }
}
</script>

<style lang="scss">
#app {
  margin: 30px;
  font-size: 14px;
  .box {
    margin: 20px;
  }
  .demo {
    background: #ddd;
    border: 1px solid #666;
    height: 50px;
  }
}
</style>
