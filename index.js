import Icon from './src/basic/icon/icon.js'
import Button from './src/basic/button/button.js'

const components = [
  Icon,
  Button
]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default { install }

export { Button }