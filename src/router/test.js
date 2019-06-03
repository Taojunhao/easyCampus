export default [
  {
    path: '/test',
    name: 'test',
    meta: {
      label: '测试模块',
      requireAuth: false,//判断是否需要登录
    },
    component: () => import('../view/test/test')
  }
]
