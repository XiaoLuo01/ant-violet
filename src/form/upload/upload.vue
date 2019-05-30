<template>
  <div class="v-upload">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <div ref="temp" style="display:none;"></div>
    <!-- <img :src="url" alt=""> -->
    <ol>
      <li v-for="(file, i) in fileList" :key="i">
        <img :src="file.url" width="48" height="48" alt="">
        <div class="filename">{{file.name}}</div>
        <i @click="onRemoveFile(file)" class="remove-btn">x</i>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'vUpload',
  props: {
    name: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: true
    },
    action: {
      type: String,
      default: 'POST'
    },
    parseResponse: {
      type: Function,
      required: true
    },
    fileList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      url: 'about:blank'
    }
  },
  methods: {
    onClickUpload() {
      let input = this.createInput()
      // listen to input
      input.addEventListener('change', () => {
        let file = input.files[0]
        this.updateFile(file)
        input.remove()
      })
      // trigger
      input.click()
    },
    onRemoveFile(file) {
      let copy = [...this.fileList]
      let index = copy.indexOf(file)
      copy.splice(index, 1)
      this.$emit('update:fileList', copy)
    },
    createInput() {
      // create input 
      let input = document.createElement('input')
      input.type = 'file'
      this.$refs.temp.appendChild(input)
      return input
    },
    updateFile(file) {
      let formData = new FormData()
      formData.append(this.name, file)
      let {name, size, type} = file
      this.doUpdateFile(formData, (response) => {
        let url = this.parseResponse(response)
        this.url = url
        this.$emit('update:fileList', [...this.fileList, {name, size, type, url}])
      })
    },
    doUpdateFile(formData, success) {
      let xhr = new XMLHttpRequest()
      xhr.open(this.method, this.action)
      xhr.onload = () => {
        success && success(xhr.response)
      }
      xhr.send(formData)
    }
  }
}
</script>

<style scoped lang="scss">
.v-upload {
  ol{
    list-style:none;
    padding: 0;
    li {
      position: relative;
      height: 66px;
      padding: 8px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      .filename {
        margin-left: 8px;
      }
      .remove-btn {
        position: absolute;
        right: 10px;
        top: 0;
        font-style: normal;
      }
    }
  }
}
</style>
