<template>
  <div class="v-cascader-items">
    <div class="left">
      
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
import vIcon from "../../basic/icon/icon";
export default {
  name: 'vCascaderItems',
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    }
  },
  data() {
    return {
      leftSelected: null
    }
  },
  components: {
    Icon
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
.v-cascader-items {

}
</style>
