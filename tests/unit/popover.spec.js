import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import Vue from "vue/dist/vue.js"
chai.use(sinonChai)
import Popover from '@/others/popover/popover'

 describe('Popover', () => {
     it('存在.', () => {
         expect(Popover).to.be.ok
     })
     it('可以设置 position.', () => {
      const wrapper = mount(Popover,{
        slots: {
          default: {template: `<button>点我</button>`},
          content: '弹出内容'
        },
        propsData: {
          position: 'bottom'
        }
      })
  
      wrapper.find('button').trigger('click')
      let classes = wrapper.find('.content-wrapper').classes()
      expect(classes).to.include('position-bottom')
     })

     it('可以设置 trigger.', () => {
      const wrapper = mount(Popover,{
        slots: {
          default: {template: `<button>点我</button>`},
          content: '弹出内容'
        },
        propsData: {
          position: 'bottom',
          trigger: 'hover'
        }
      })
      expect(wrapper.find('.content-wrapper').element).to.not.exist
      wrapper.find('.v-popover').trigger('mouseenter')
      expect(wrapper.find('.content-wrapper').element).to.exist
     })
 })