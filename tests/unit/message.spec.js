import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Message from '@/notice/message/message.vue'
import Vue from "vue/dist/vue.js"
chai.use(sinonChai)

describe('Message 组件', () => {
  it('is ok', () => {
    expect(Message).to.exist
  })

  it('接受 autoClose', (done) => {
    const wrapper = mount(Message, {
      propsData: {
        autoClose: false,
        autoCloseDelay: 1
      }
    })
    const vm = wrapper.vm
    setTimeout(() => {
      expect(document.body.contains(vm.$el)).to.eq(false)
    }, 1000)
    done()
  })

  it('接受 closeButton', () => {
    const wrapper = mount(Message, {
      propsData: {
        closeButton: true
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.querySelector('.v-close')).to.exist
  })

  it('接受 enableHtml', () => {
    const Constructor = Vue.extend(Message)
    const vm = new Constructor({
        propsData: {enableHtml: true}
    })
    vm.$slots.default = [`<strong id="test">hi</strong>`]
    vm.$mount()
    let strong = vm.$el.querySelector('#test')
    expect(strong).to.exist
  })

  it('接受 position', () => {
    const wrapper = mount(Message, {
      propsData: {
        position: 'middle'
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('position-middle')).to.eq(true)
  })
})
