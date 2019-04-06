import NavMenu from './nav-menu.vue'
import NavMenuItem from './nav-menu-item.vue'
import NavSubmenu from './nav-submenu.vue'

NavMenu.install = Vue => {
  Vue.component(NavMenu.name, NavMenu)
  Vue.component(NavMenuItem.name, NavMenuItem)
  Vue.component(NavSubmenu.name, NavSubmenu)
}

export default Tabs