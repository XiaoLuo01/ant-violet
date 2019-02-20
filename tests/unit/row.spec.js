import chai, {expect} from 'chai'
import Vue from "vue/dist/vue.js"
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

  it("接收 gutter 属性", (done) => {
    Vue.component("v-row", Row)
    Vue.component("v-col", Col)
    const div = document.createElement("div")
    document.body.appendChild(div)
    div.innerHTML = `
    <v-row gutter="20">
      <v-col></v-col>
      <v-col></v-col>
    </v-row>
    `
    const vm = new Vue({
      el: div
    })

    setTimeout(() => {
      const row = vm.$el.querySelector(".v-row")
      expect(getComputedStyle(row).marginLeft).to.be.eq("-10px")
      expect(getComputedStyle(row).marginRight).to.be.eq("-10px")
      const cols = vm.$el.querySelectorAll(".v-col")
      expect(getComputedStyle(cols[0]).paddingLeft).to.be.eq("10px")
      expect(getComputedStyle(cols[1]).paddingRight).to.be.eq("10px")
      done() // 异步
      vm.$el.remove()
      vm.$destroy()
    }, 0)
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