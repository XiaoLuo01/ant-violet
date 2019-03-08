import messageComponent from './message.vue'
let currentMessage

const Message = {
  install(Vue, options) {
    Vue.prototype.$message = function (msg, propsData) {
      if (currentMessage) {
        currentMessage.close()
      }
      currentMessage = createMessage({
        Vue,
        msg,
        propsData,
        onClose: () => {
          currentMessage = null
        }
      })
    }
  }
}

/**
 * 帮助函数
 */

function createMessage({Vue, msg, propsData, onClose}) {
  let Constructor = Vue.extend(messageComponent)
  let message = new Constructor({
    propsData
  })
  message.$slots.default = [msg]
  message.$mount()
  message.$on('close', onClose)
  document.body.appendChild(message.$el)
  return message
}


export default Message