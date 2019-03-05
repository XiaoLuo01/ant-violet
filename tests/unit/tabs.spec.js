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

describe('Tabs', () => {

    it('Tabs 存在', () => {
        expect(Tabs).to.exist
    })

    it('接受 selected 属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <v-tabs selected="finance">
            <v-tabs-head>
                <v-tabs-item name="woman"> 美女 </v-tabs-item>
                <v-tabs-item name="finance"> 财经 </v-tabs-item>
                <v-tabs-item name="sports"> 体育 </v-tabs-item>
            </v-tabs-head>
            <v-tabs-body>
                <v-tabs-pane name="woman"> 美女相关资讯 </v-tabs-pane>
                <v-tabs-pane name="finance"> 财经相关资讯 </v-tabs-pane>
                <v-tabs-pane name="sports"> 体育相关资讯 </v-tabs-pane>
            </v-tabs-body>
        </v-tabs>
        `

        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.v-tabs-item[data-name="finance"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })

    it('可以接受 direction prop', () => {
    })
})