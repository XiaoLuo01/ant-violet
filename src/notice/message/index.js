import messageComponent from './message.vue'

const Message = {
  install(Vue, options) {
    Vue.prototype.$message = function (msg) {
      let Constructor = Vue.extend(messageComponent)
      let message = new Constructor()
      message.$slots.default = [msg]
      message.$mount()
      document.body.appendChild(message.$el)
    }
  }
}

export default Message