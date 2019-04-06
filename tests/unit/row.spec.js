import chai, {expect} from 'chai'
import Vue from "vue"
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import Row from '@/layout/grid/row.vue'
import Col from '@/layout/grid/col.vue'
chai.use(sinonChai)

describe('Row 组件', () => {
  it('is ok', () => {
    expect(Row).to.exist
  })

  it("接收 gutter 属性", () => {
    Vue.component("v-col", Col)
    const wrapper = mount(Row, {
      propsData: {
        gutter: '20'
      },
      slots: {
        default: `
        <v-col></v-col>
        <v-col></v-col>
        `
      }
    })

    setTimeout(() => {
      const row = wrapper.find(".v-row").element
      expect(getComputedStyle(row).marginLeft).to.be.eq("-10px")
      expect(getComputedStyle(row).marginRight).to.be.eq("-10px")
      const cols = wrapper.find(".v-row").element
      expect(getComputedStyle(cols[0]).paddingLeft).to.be.eq("10px")
      expect(getComputedStyle(cols[1]).paddingRight).to.be.eq("10px")
      // done() // 异步
    })
  })

  it("接收 align 属性", () => {
    const wrapper = mount(Row, {
      propsData: {
        align: 'center'
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('align-center')).to.equal(true)
  })
})