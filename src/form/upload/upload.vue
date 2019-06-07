<template>
  <div class="v-upload">
    <div @click="onClickUpload">
      <slot></slot>
    </div>
    <ol>
      <li v-for="(file, i) in fileList" :key="i">
        <template v-if="file.status === 'uploading'">
          <v-icon name="v-loading"></v-icon>
        </template>
        <template v-else-if="file.type.indexOf('image') === 0">
          <img :src="file.url" width="48" height="48" alt="">
        </template>
        <template v-else>
          <div class="v-upload-defaultImage"></div>
        </template>
        <div class="filename" :class="{[file.status]: file.status}">{{file.name}}</div>
        <i @click="onRemoveFile(file)" class="remove-btn">x</i>
      </li>
    </ol>
    <div ref="temp" style="display:none;"></div>
  </div>
</template>

<script>
import vIcon from "../../basic/icon/icon";
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
    },
    sizeLimit: {
      type: Number
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  components: {
    vIcon
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
        this.updateFiles(input.files)
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
      this.$refs.temp.innerHTML = ''
      // create input 
      let input = document.createElement('input')
      input.type = 'file'
      input.multiple = this.multiple
      this.$refs.temp.appendChild(input)
      return input
    },
    beforeUploadFiles(rawFiles, newNames) {
      rawFiles = Array.from(rawFiles)
      for(let i =0; i < rawFiles.length; i++) {
        let {size, type} = rawFiles[i]
        if (size > this.sizeLimit * 1024 * 1024) {
          this.$emit('error', `文件大于${this.sizeLimit}MB`)
          return false
        }
      }

      let x = rawFiles.map((rawFile, i) => {
        let {size, type} = rawFile
        return {name: newNames[i], size, type, status: 'uploading'}
      })
      this.$emit('update:fileList', [...this.fileList, ...x])
      return true
    },
    updateFiles(rawFiles) {
      let newNames = []
      for(let i =0; i < rawFiles.length; i++) {
        let rawFile = rawFiles[i]
        let {name} = rawFile
        let newName = this.generateName(name)
        newNames[i] = newName
      }

      if (!this.beforeUploadFiles(rawFiles, newNames)) {return}

      for(let i =0; i < rawFiles.length; i++) {
        let rawFile = rawFiles[i]
        let newName = newNames[i]

        let formData = new FormData()
        formData.append(this.name, rawFile)
        
        this.doUpdateFiles(formData, (response) => {
          let url = this.parseResponse(response)
          this.url = url
          this.afterUploadFiles(newName, url)
        }, (xhr) => {
          this.uploadError(xhr, newName)
        })
      }
    },
    afterUploadFiles(newName, url){
      let file = this.fileList.filter(f => f.name === newName)[0]
      let index = this.fileList.indexOf(file)
      let copy = JSON.parse(JSON.stringify(file))
      copy.url = url
      copy.status = 'success'
      let fileListCopy = JSON.parse(JSON.stringify(this.fileList))
      fileListCopy.splice(index, 1, copy)
      this.$emit('update:fileList', fileListCopy)
    },
    generateName(name) {
      // 设置不同的 filename
      while( this.fileList.filter(f => f.name === name).length > 0) {
        let dotIndex = name.lastIndexOf('.')
        let nameWithoutExtension = name.substring(0, dotIndex)
        let extension = name.substring(dotIndex)
        name = nameWithoutExtension + '(1)' + extension
      }
      return name
    },
    uploadError(xhr, newName) {
      let file = this.fileList.filter(f => f.name === newName)[0]
      let fileCopy = JSON.parse(JSON.stringify(file))
      let index = this.fileList.indexOf(file)
      fileCopy.status = 'fail'
      let fileListCopy = JSON.parse(JSON.stringify(this.fileList))
      fileListCopy.splice(index, 1, fileCopy)
      this.$emit('update:fileList', fileListCopy)

      let error = ''
      if (xhr.status === 0) {
        error = '网络无法连接'
      }
      this.$emit('error', error)
    },
    doUpdateFiles(formData, success, fail) {
      let xhr = new XMLHttpRequest()
      xhr.open(this.method, this.action)
      xhr.onload = () => {
        success && success(xhr.response)
      }
      xhr.onerror = () => {
        fail(xhr, xhr.statusCode)
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
        color: #1890ff;
        &.fail {
          color: #f5222d;
        }
      }
      .remove-btn {
        position: absolute;
        right: 10px;
        top: 0;
        font-style: normal;
        cursor: pointer;
      }
      .v-icon {
        margin: 0 10px;
        @include spin;
      }
    }
  }
  &-defaultImage {
    border: 1px solid #d9d9d9;
    width: 48px;
    height: 48px;
  }
}
</style>
