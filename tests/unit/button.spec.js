import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Button from '@/basic/button/button.vue'
chai.use(sinonChai)

describe('Button 组件', () => {
  it('is ok', () => {
    expect(Button).to.exist
  })

  it('可以设置 icon.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'v-settings'
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes()['href']).to.eq('#v-settings')
  })
  
  it('可以设置 loading.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'v-settings',
        loading: true
      }
    })
    const vm = wrapper.vm
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#v-loading')
  })

  it('可以设置 primary.', () => {
    const wrapper = mount(Button, {
      propsData: {
        primary: true
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('primary')).to.equal(true)
  })

  it('可以设置 dashed.', () => {
    const wrapper = mount(Button, {
      propsData: {
        dashed: true
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('dashed')).to.equal(true)
  })

  it('可以设置 danger.', () => {
    const wrapper = mount(Button, {
      propsData: {
        danger: true
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('danger')).to.equal(true)
  })

  it('可以设置 disabled.', () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('disabled')).to.equal(true)
    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })

  it('icon 默认的 order 是 1', () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        icon: 'settings',
      }
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
  })

   it('设置 iconPosition 可以改变 order', () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
  })

  it('点击 button 触发 click 事件', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
      }
    })
    const vm = wrapper.vm
    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
   })
})
