<template>
  <div>
    <ul class="icon-list">
      <li>
        <span>
          <v-icon name="v-info"></v-icon>
          <span class="icon-name">v-info</span>
        </span>
      </li>
      <li>
        <span>
          <v-icon name="v-error"></v-icon>
          <span class="icon-name">v-error</span>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
import Icon from "../../../src/basic/icon/icon";
export default {
  components: {
    "v-icon": Icon
  },
  data() {
    return {
    };
  }
};
</script>
<style lang="scss">
.icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  > li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    > span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      // font-family: 'Helvetica Neue','Helvetica','PingFang SC','Hiragino Sans GB','Microsoft YaHei', 'SimSun','sans-serif';
      color: #99a9bf;
      > svg {
        display: block;
        width: 32px!important;
        height: 32px!important;
        margin-bottom: 15px!important;
        color: #606266;
      }
      .icon-name {
        display: inline-block;
        padding: 0 3px;
        height: 1em;
        font-size: 14px;
        color: #606266;
      }
    }
  }
}
</style>