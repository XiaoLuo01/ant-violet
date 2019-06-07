<template>
  <div style="margin: 30px 0">
    <v-upload :accept="accpet" method="POST" action="http://127.0.0.1:3000/upload" name="file" :parseResponse="parseResponse" :fileList.sync="fileList" @error="error" :size-limit="1">
      <v-button>点击上传</v-button>
    </v-upload>
  </div>
</template>

<script>
import Upload from "../../../src/form/upload/upload";
import Button from "../../../src/basic/button/button";
export default {
  name: "",
  data() {
    return {
      fileList: [],
      accpet: 'image/*'
    };
  },
  methods: {
    parseResponse(response) {
      let object = JSON.parse(response)
      let url = `http://127.0.0.1:3000/preview/${object.id}`
      return url
    },
    error(err) {
      alert(err || '上传失败')
    }
  },
  components: {
    "v-upload": Upload,
    "v-button": Button
  }
};
</script>
<style lang="scss" scoped>

</style>
