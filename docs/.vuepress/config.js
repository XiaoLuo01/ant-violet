module.exports = {
  base: '/Ant-violet/',
  title: 'Ant-violet',
  description: '一个好用的 UI 框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/'},
      { text: 'Github', link: 'https://github.com/XiaoLuo01/ant-violet'}
    ],
    sidebar: [
      '/install/',
      '/get-started/',
      {
        title: '组件',
        children: [ '/components/basic', '/components/layout' ]
      }
    ]
  }
}