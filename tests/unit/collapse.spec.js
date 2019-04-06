import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
chai.use(sinonChai)

import Vue from "vue"
import Collapse from '@/data/collapse/collapse'
import CollapseItem from '@/data/collapse/collapse-item'

describe('Collapse', () => {

  it('存在.', () => {
    expect(Collapse).to.exist
  })

  it('接受 selected 属性', () => {
    Vue.component('v-collapse-item', CollapseItem)
    const wrapper = mount(Collapse, {
      propsData: {
        selected: ['1', '2']
      },
      slots: {
        default: `
        <v-collapse-item title="标题1" name="1"><span id="content-1">1</span></v-collapse-item>
        <v-collapse-item title="标题2" name="2"><span id="content-2">2</span></v-collapse-item>
        <v-collapse-item title="标题3" name="3"><span id="content-3">3</span></v-collapse-item>
        `
      }
    })

    setTimeout(() => {
      expect(wrapper.find('[data-name]="1".selected').exists()).to.be.true
      expect(wrapper.find('[data-name]="2".selected').exists()).to.be.true
      expect(wrapper.find('[data-name]="3".selected').exists()).to.not.be.true
    },21)
  })

  it('接受 accordion 属性', () => {
    Vue.component('v-collapse-item', CollapseItem)
    const wrapper = mount(Collapse, {
      propsData: {
        selected: ['1'],
        accordion: true
      },
      slots: {
        default: `
        <v-collapse-item title="标题1" name="1"><span id="content-1">1</span></v-collapse-item>
        <v-collapse-item title="标题2" name="2"><span id="content-2">2</span></v-collapse-item>
        <v-collapse-item title="标题3" name="3"><span id="content-3">3</span></v-collapse-item>
        `
      }
    })

    setTimeout(() => {
      wrapper.find('[data-name="3"]').trigger('click')
      expect(wrapper.find('[data-name]="3".selected').exists()).to.be.true
    })
  })

  it('触发 update:selected 事件', () => {
    Vue.component('v-collapse-item', CollapseItem)
    const callback = sinon.fake();
    const wrapper = mount(Collapse, {
      propsData: {
        selected: ['1']
      },
      slots: {
        default: `
        <v-collapse-item title="标题1" name="1"><span id="content-1">1</span></v-collapse-item>
        <v-collapse-item title="标题2" name="2"><span id="content-2">2</span></v-collapse-item>
        <v-collapse-item title="标题3" name="3"><span id="content-3">3</span></v-collapse-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })

    wrapper.find('[data-name="2"]').trigger('click')
    expect(callback).to.have.been.calledWith(['1', '2'])
  })
})