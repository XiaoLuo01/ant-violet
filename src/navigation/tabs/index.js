import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsTitle from './tabs-title.vue'
import TabsBody from './tabs-body.vue'
import TabsPane from './tabs-pane.vue'

Tabs.install = Vue => {
  Vue.component(Tabs.name, Tabs)
  Vue.component(TabsHead.name, TabsHead)
  Vue.component(TabsBody.name, TabsBody)
  Vue.component(TabsTitle.name, TabsTitle)
  Vue.component(TabsPane.name, TabsPane)
}

export default Tabs