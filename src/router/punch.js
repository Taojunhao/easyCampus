export default [
  {
    path: '/',
    name: 'punch',
    meta: {
      label: '打卡首页',
      requireAuth: false,//判断是否需要登录
    },
    component: () => import('../view/punch'),
    children: [
      {
        path: '/',
        name: 'punch',
        meta: {
          label: '打卡首页',
          requireAuth: false,//判断是否需要登录
        },
        component: () => import('../view/punch/punch.vue'),
      },
      {
        path: '/punch',
        name: 'punch',
        meta: {
          label: '打卡首页',
          requireAuth: false,//判断是否需要登录
        },
        component: () => import('../view/punch/punch.vue'),
      },
      {
        path: '/friendlySquare',
        name: 'friendlySquare',
        meta: {
          label: '好友广场',
          requireAuth: false,//判断是否需要登录
        },
        component: () => import('../view/punch/friendlySquare')
      },
      {
        path: '/punchedStart',
        name: 'friendlySquare',
        meta: {
          label: '开始打卡',
          requireAuth: false,//判断是否需要登录
        },
        component: () => import('../view/punch/start')
      },
    ]
  }
]
