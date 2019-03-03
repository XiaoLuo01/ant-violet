import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
chai.use(sinonChai)

import Vue from "vue/dist/vue.js"
import Collapse from '@/data/collapse/collapse'
import CollapseItem from '@/data/collapse/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {

  it('存在.', () => {
    expect(Collapse).to.exist
  })

  it('接受 selected 属性', (done) => {
    Vue.component('v-collapse', Collapse)
    Vue.component('v-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <v-collapse :selected="xxx">
        <v-collapse-item title="标题1" name="1"><span id="content-1">1</span></v-collapse-item>
        <v-collapse-item title="标题2" name="2"><span id="content-2">2</span></v-collapse-item>
        <v-collapse-item title="标题3" name="3"><span id="content-3">3</span></v-collapse-item>
      </v-collapse>
    `
    const vm = new Vue({
      el: div,
      data: {
        xxx: ['1', '2']
      }
    })
    setTimeout(() => {
      expect(vm.$el.querySelector('#content-1')).to.exist
      expect(vm.$el.querySelector('#content-2')).to.exist
      expect(vm.$el.querySelector('#content-3')).to.not.exist
      done()
    })
  })

  it('接受 accordion 属性', (done) => {
    Vue.component('v-collapse', Collapse)
    Vue.component('v-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <v-collapse :selected.sync="xxx" accordion>
        <v-collapse-item title="标题1" name="1"><span id="content-1">1</span></v-collapse-item>
        <v-collapse-item title="标题2" name="2"><span id="content-2">2</span></v-collapse-item>
        <v-collapse-item title="标题3" name="3"><span id="content-3">3</span></v-collapse-item>
      </v-collapse>
    `
    const vm = new Vue({
      el: div,
      data: {
        xxx: ['1']
      }
    })
    setTimeout(() => {
      vm.$el.querySelector('[data-name="3"]').click()
      setTimeout(() => {
        expect(vm.$el.querySelector('#content-1')).to.not.exist
        expect(vm.$el.querySelector('#content-3')).to.exist
        done()
      }, 1000)
    })
  })

  it('触发 update:selected 事件', (done) => {
    Vue.component('v-collapse', Collapse)
    Vue.component('v-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <v-collapse :selected="xxx" @update:selected="onSelect">
        <v-collapse-item title="标题1" name="1"><span id="content-1">1</span></v-collapse-item>
        <v-collapse-item title="标题2" name="2"><span id="content-2">2</span></v-collapse-item>
        <v-collapse-item title="标题3" name="3"><span id="content-3">3</span></v-collapse-item>
      </v-collapse>
    `
    const callback = sinon.fake();
    const vm = new Vue({
      el: div,
      data: {
        xxx: ['1']
      },
      methods: {
        onSelect: callback
      }
    })
    setTimeout(() => {
      vm.$el.querySelector('[data-name="2"]').click()
      setTimeout(() => {
        expect(callback).to.have.been.called
        done()
      })
    })
  })
})