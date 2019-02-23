import Icon from './src/basic/icon/index.js';
import Button from './src/basic/button/index.js';
import ButtonGroup from './src/basic/button-group/index.js';
import Input from './src/form/input/index.js';
import Layout from './src/layout/container/index.js';
import Grid from './src/layout/grid/index.js';

const components = [
  Icon,
  Button,
  ButtonGroup,
  Input,
  Layout,
  Grid
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

export { Button, ButtonGroup, Icon, Input, Layout, Grid }