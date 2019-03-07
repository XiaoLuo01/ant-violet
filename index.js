import Icon from './src/basic/icon/index.js';
import Button from './src/basic/button/index.js';
import ButtonGroup from './src/basic/button-group/index.js';
import Input from './src/form/input/index.js';
import Layout from './src/layout/container/index.js';
import Grid from './src/layout/grid/index.js';
import Collapse from './src/data/collapse/index.js';
import Tabs from './src/navigation/tabs/index.js';
import Message from './src/notice/message/index.js';
import CollapseTransition from './src/others/collapse-transition/index.js';

const components = [
  Icon,
  Button,
  ButtonGroup,
  Input,
  Layout,
  Grid,
  Collapse,
  Tabs,
  CollapseTransition
]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
  Vue.use(Message)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default { install, Message }

export { Button, ButtonGroup, Icon, Input, Layout, Grid, Collapse, Tabs, Message, CollapseTransition }