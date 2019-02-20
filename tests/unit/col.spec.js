import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import Col from '@/layout/grid/col.vue'
chai.use(sinonChai)

describe('Col 组件', () => {
  it('is ok', () => {
    expect(Col).to.exist
  })

  it("接受 span 属性", () => {
    const wrapper = mount(Col, {
      propsData: {
        span: 1
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('col-1')).to.equal(true)
  })

  it("接受 offset 属性", () => {
    const wrapper = mount(Col, {
      propsData: {
        offset: 1
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('offset-1')).to.equal(true)
  })

  it("接受 pc 属性", () => {
    const wrapper = mount(Col, {
      propsData: {
        pc: {span: 1, offset:2}
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('col-pc-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-pc-2')).to.equal(true)
  })

  it("接受 ipad 属性", () => {
    const wrapper = mount(Col, {
      propsData: {
        ipad: {span: 1, offset:2}
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('col-ipad-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-ipad-2')).to.equal(true)
  })

  it("接受 narrow-pc 属性", () => {
    const wrapper = mount(Col, {
      propsData: {
        narrowPc: {span: 1, offset:2}
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('col-narrow-pc-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-narrow-pc-2')).to.equal(true)
  })

  it("接受 wide-pc 属性", () => {
    const wrapper = mount(Col, {
      propsData: {
        widePc: {span: 1, offset:2}
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('col-wide-pc-1')).to.equal(true)
    expect(vm.$el.classList.contains('offset-wide-pc-2')).to.equal(true)
  })
})