import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
chai.use(sinonChai)
import Vue from "vue/dist/vue.js"
import Tabs from '@/navigation/tabs/tabs'
import TabsHead from '@/navigation/tabs/tabs-head'
import TabsBody from '@/navigation/tabs/tabs-body'
import TabsItem from '@/navigation/tabs/tabs-item'
import TabsPane from '@/navigation/tabs/tabs-pane'

Vue.component('v-tabs', Tabs)
Vue.component('v-tabs-head', TabsHead)
Vue.component('v-tabs-body', TabsBody)
Vue.component('v-tabs-item', TabsItem)
Vue.component('v-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {

    it('TabsItem 存在', () => {
        expect(TabsItem).to.exist
    })

    it('接受 name 属性', () => {
      const wrapper = mount(TabsItem, {
        propsData: {
          name: 'sports',
        },
        provide: {
          eventBus: new Vue()
        }
      })
      const vm = wrapper.vm
      expect(vm.$el.getAttribute('data-name')).to.eq('sports')
    })

    it('接受 disabled 属性', () => {
      const wrapper = mount(TabsItem, {
        propsData: {
          name: 'sports',
          disabled: true
        },
        provide: {
          eventBus: new Vue()
        }
      })
      const vm = wrapper.vm
      expect(vm.$el.classList.contains('disabled')).to.be.true
      const callback = sinon.fake();
      vm.$on('click', callback)
      vm.$el.click()
      expect(callback).to.have.not.been.called
    })
})