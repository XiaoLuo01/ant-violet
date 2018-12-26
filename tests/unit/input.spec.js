import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import Input from '@/form/input/input.vue'
chai.use(sinonChai)

describe('Input 组件', () => {
  it('is ok', () => {
    expect(Input).to.exist
  })

  describe("props", () => {
    it("接收 value", () => {
      const wrapper = mount(Input, {
        propsData: {
          value: 'basic usage'
        }
      })
      const vm = wrapper.vm
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement.value).to.equal("basic usage")
    })

    it("接收 disabled", () => {
      const wrapper = mount(Input, {
        propsData: {
          disabled: true
        }
      })
      const vm = wrapper.vm
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement.disabled).to.equal(true)
    })

    it("接收 error", () => {
      const wrapper = mount(Input, {
        propsData: {
          error: "你错了"
        }
      })
      const useElement = wrapper.find('use')
      expect(useElement.attributes()['href']).to.eq('#v-warning')
      const vm = wrapper.vm
      expect(vm.$el.textContent).to.equal("你错了")
    })

  })

  describe("事件", () => {

    it("支持 change/input/focus/blur 事件", () => {
      ;["change", "input", "focus", "blur"].forEach(eventName => {
        const wrapper = mount(Input, {})
        const vm = wrapper.vm
        const callback = sinon.fake();
        vm.$on(eventName, callback)
        // 触发 input 的 change 事件
        var event = new Event(eventName)
        Object.defineProperty(event, 'target', {value: {value:'hi'}, enumerable: true})
        let inputElement = vm.$el.querySelector("input")
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
      })
    })

  })

})