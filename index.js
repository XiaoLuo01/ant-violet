import Icon from './src/basic/icon/index.js'
import Button from './src/basic/button/index.js'

const components = [
  Icon,
  Button
]

const install = Vue => {
  components.forEach(component => {
    component.install(Vue)
  })
}

export default { install }