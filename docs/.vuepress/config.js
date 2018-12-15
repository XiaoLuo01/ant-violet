module.exports = {
  base: '/ant-violet/',
  title: 'Ant-violet',
  description: '一套基于 Vue 2.5 的 UI 组件库',
  themeConfig: {
    nav: [
      { text: '主页', link: '/'},
      { text: 'Github', link: 'https://github.com/XiaoLuo01/ant-violet'}
    ],
    sidebar: [
      '/guide/',
      '/install/',
      '/get-started/',
      {
        title: '组件',
        children: [ '/components/basic', '/components/layout' ]
      }
    ]
  },
  scss:{
    data: `@import "styles/_var.scss";`
  }
}