<template>
  <div>
    <ul class="icon-list">
      <li v-for="(icon, index) in iconList">
        <span>
          <v-icon :name="icon"></v-icon>
          <span class="icon-name">{{icon}}</span>
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
      iconList: [
        'v-warning', 'v-question', 'v-info', 'v-success', 'v-error', 'v-loading', 'v-settings', 'v-upload1', 'v-upload', 'v-download', 'v-share', 'v-edit', 'v-edit-outline', 'v-location', 'v-location-outline', 'v-phone', 'v-phone-outline', 'v-more', 'v-more-outline', 'v-star-on', 'v-star-off', 'v-delete', 'v-picture', 'v-picture-outline', 'v-search', 'v-menu', 'v-time', 'v-view', 'v-service', 'v-bell','v-goods',  'v-sold-out', 'v-document', 'v-tickets', 'v-printer', 'v-news', 'v-date', 'v-message', 'v-sort-up', 'v-sort-down', 'v-sort', 'v-caret', 'v-check', 'v-close', 'v-remove', 'v-remove-outline', 'v-circle-plus', 'v-plus-outline', 'v-plus', 'v-minus', 'v-caret-left', 'v-caret-top', 'v-caret-right', 'v-caret-bottom', 'v-d-arrow-right', 'v-d-arrow-left', 'v-arrow-left', 'v-arrow-top', 'v-arrow-right', 'v-arrow-down'
      ]
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
        color: #606266;
        margin: 0 auto!important;
        margin-bottom: 15px!important;
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