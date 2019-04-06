<template>
  <div style="margin: 30px 0">
    <p class="outside">当前选中的标题 : {{selected}}</p>
    <v-nav-menu :selected.sync="selected">
      <v-nav-menu-item name="home">平台首页</v-nav-menu-item>
      <v-nav-submenu name="about">
        <template slot="title">关于公司</template>
        <v-nav-menu-item name="culture">企业文化</v-nav-menu-item>
        <v-nav-menu-item name="developers">开发团队</v-nav-menu-item>
        <v-nav-submenu name="contacts">
          <template slot="title">联系方式</template>
          <v-nav-menu-item name="email">邮箱地址</v-nav-menu-item>
          <v-nav-menu-item name="phone">手机号码</v-nav-menu-item>
         <v-nav-submenu name='social'>
            <template slot="title">社交网站</template>
            <v-nav-menu-item name="website">公司网址</v-nav-menu-item>
            <v-nav-menu-item name="wechat">微信扫码</v-nav-menu-item>
         </v-nav-submenu>
        </v-nav-submenu>
      </v-nav-submenu>
      <v-nav-menu-item name="hire">招聘信息</v-nav-menu-item>
      <v-nav-menu-item name="link">
        <a href="http://www.baidu.com" target="_blank">跳转百度</a>
      </v-nav-menu-item>
    </v-nav-menu>
  </div>
</template>

<script>
import NavMenu from "../../../src/navigation/nav-menu/nav-menu";
import NavMenuItem from "../../../src/navigation/nav-menu/nav-menu-item";
import NavSubmenu from "../../../src/navigation/nav-menu/nav-submenu";
export default {
  name: "",
  data() {
    return {
      selected: 'home'
    };
  },
  components: {
    "v-nav-menu": NavMenu,
    "v-nav-menu-item": NavMenuItem,
    "v-nav-submenu": NavSubmenu
  }
};
</script>
<style lang="scss" scoped>
.outside {
  display: inline-flex;
  color: #096dd9;
  font-weight: 700;
}
</style>
