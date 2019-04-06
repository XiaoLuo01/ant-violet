import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {mount} from '@vue/test-utils'
import NavMenu from '@/navigation/nav-menu/nav-menu'
import NavMenuItem from '@/navigation/nav-menu/nav-menu-item'
import Vue from "vue"
chai.use(sinonChai)

describe('NavMenu 组件', () => {
  it('is ok', () => {
    expect(NavMenu).to.exist
  })
  
  it('支持 selected 属性', () => {
    Vue.component('v-nav-menu-item', NavMenuItem)
    const wrapper = mount(NavMenu, {
      propsData: {
        selected: 'home'
      },
      slots: {
        default: `
          <v-nav-menu-item name="home">平台首页</v-nav-menu-item>
          <v-nav-menu-item name="culture">企业文化</v-nav-menu-item>
          <v-nav-menu-item name="developers">开发团队</v-nav-menu-item>
        `
      }
    })
    
    setTimeout(() => {
      expect(wrapper.find('[data-name]="home".selected').exists()).to.be.true
    }, 21)
  })

  it('会触发 update:selected 事件', () => {
    Vue.component('v-nav-menu-item', NavMenuItem)
    const callback = sinon.fake()
    const wrapper = mount(NavMenu, {
      propsData: {
        selected: 'home'
      },
      slots: {
        default: `
          <v-nav-menu-item name="home">平台首页</v-nav-menu-item>
          <v-nav-menu-item name="culture">企业文化</v-nav-menu-item>
          <v-nav-menu-item name="developers">开发团队</v-nav-menu-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })

    wrapper.find('[data-name="culture"]').trigger('click')
    expect(callback).to.have.been.calledWith('culture')
  })

})
