<template>
  <div style="margin: 30px 0">
    <v-carousel :selected.sync="selected">
      <v-carousel-item name="1">
        <div class="box">1</div>
      </v-carousel-item>
      <v-carousel-item name="2">
        <div class="box">2</div>
      </v-carousel-item>
      <v-carousel-item name="3">
        <div class="box">3</div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import Carousel from "../../../src/data/carousel/carousel";
import CarouselItem from "../../../src/data/carousel/carousel-item";
export default {
  name: "",
  data() {
    return {
      selected: '1'
    };
  },
  components: {
    "v-carousel": Carousel,
    "v-carousel-item": CarouselItem
  },
  created() {
  }
};
</script>
<style lang="scss" scoped>
.box {
  // width: 200px;
  // height: 150px;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
}
// .v-carousel-item:nth-child(2n) .box {
//   background-color: #99a9bf;
// }

.v-carousel-item .box {
  background-color: #d3dce6;
}
</style>
