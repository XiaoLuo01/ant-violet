<template>
  <div style="margin: 30px 0">
    <v-layout>
      <v-header> 
        <div class="header-demo demo">Header</div>
      </v-header>
      <v-content>
        <div class="content-demo demo">Content</div>
      </v-content>
      <v-footer>
        <div class="footer-demo demo">Footer</div>
      </v-footer>
    </v-layout>

    <div style="height: 30px"></div>

    <v-layout>
      <v-header>
        <div class="header-demo demo">Header</div>
      </v-header>
      <v-layout>
        <v-sider>
          <div class="sider-demo demo">sider</div>
        </v-sider>
        <v-content>
          <div class="content-demo demo">Content</div>
        </v-content>
      </v-layout>
      <v-footer>
        <div class="footer-demo demo">Footer</div>
      </v-footer>
    </v-layout>

    <div style="height: 30px"></div>

    <v-layout>
      <v-sider>
        <div class="sider-demo sider-demo1 demo">sider</div>
      </v-sider>

      <v-layout>
        <v-header>
          <div class="header-demo demo">Header</div>
        </v-header>
        <v-layout>
          <v-sider>
            <div class="sider-demo demo">sider</div>
          </v-sider>
          <v-content>
            <div class="content-demo demo">Content</div>
          </v-content>
        </v-layout>
        <v-footer>
          <div class="footer-demo demo">Footer</div>
        </v-footer>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
import Layout from "../../../src/layout/container/layout";
import Header from "../../../src/layout/container/header";
import Footer from "../../../src/layout/container/footer";
import Sider from "../../../src/layout/container/sider";
import Content from "../../../src/layout/container/content";

export default {
  name: "",
  data() {
    return {
    };
  },
  components: {
    "v-layout": Layout,
    "v-header": Header,
    "v-footer": Footer,
    "v-sider": Sider,
    "v-content": Content
  }
};
</script>
<style lang="scss" scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-demo, .footer-demo {
  height: 50px;
  background: #7dbcea;
  color: #fff;
}
.content-demo {
  min-height: 120px;
  background: rgba(16, 142, 233, 1);
  color: #fff;
}
.sider-demo {
  background-color: #3ba0e9;
  min-height: 120px;
  width: 100px;
  color: #fff;
}
.sider-demo1 {
  height: 100%;
  background-color: #5aabe5;
}
</style>
