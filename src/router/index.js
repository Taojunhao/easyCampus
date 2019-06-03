import Vue from 'vue'
import Router from 'vue-router'
import {Auth as storage} from "../store/user/auth";
import punch from "./punch";



Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        label: '首页',
        requireAuth: false,//判断是否需要登录
      },
      component: () => import('../view/home'),
      children: [
        {
          path: '/',
          name: 'smartlife',
          meta: {
            label: '智慧校园',
            requireAuth: false,//判断是否需要登录
          },
          component: () => import('../view/smartLife/'),
          children: [
            {
              path: '/',
              name: 'home',
              meta: {
                label: '智慧校园首页',
                requireAuth: false,//判断是否需要登录
              },
              component: () => import('../view/smartLife/smartLife')
            },

            {
              path: '/smartlife',
              name: 'smartLife',
              meta: {
                label: '智慧校园首页',
                requireAuth: false,//判断是否需要登录
              },
              component: () => import('../view/smartLife/smartLife')
            }
          ]
        },
        {
          path: '/shopping',
          name: 'home',
          meta: {
            label: '首页',
            requireAuth: false,//判断是否需要登录
          },
          component: () => import('../view/home/home'),
        },
        {

          path: '/category',
          name: 'category',
          meta: {
            label: '分类'
          },
          component: () => import('../view/category/category')
        },
        {
          path:'/recommend',
          meta: {
            label: '推荐'
          },
          component: () => import('../view/recommend'),
          children: [
            {
              path: '/',
              name: 'news',
              meta: {
                label: '新闻',
                requireAuth: false,//判断是否需要登录
              },
              component: () => import('../view/recommend/schoolNew')
            }
          ]
        },
        {
          path: '/my',
          name: 'my',
          meta: {
            label: '我的',
            requireAuth: false,//判断是否需要登录
          },
          component: () => import('../view/my')
        },

      ]
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        label: '登陆',
        requireAuth: false,//判断是否需要登录
      },
      component: () => import('../view/login/login')
    },
    {
      path: '/forget',
      name: 'forget',
      meta: {
        label: '忘记密码',
        requireAuth: false,//判断是否需要登录
      },
      component: () => import('../view/login/forgetPassword')
    },

    {
      path: '/register',
      name: 'register',
      meta: {
        label: '注册新用户',
        requireAuth: false,//判断是否需要登录
      },
      component: () => import('../view/login/createNew')

    },
    {
      path: '/goods',
      name: 'goods',
      meta: {
        label: '商品详情',
        requireAuth: false,//判断是否需要登录
      },
      component: () => import('../view/goods/goods')
    },
    {
      path: '/cart',
      name: 'goods',
      meta: {
        label: '购物车',
        requireAuth: false,//判断是否需要登录
      },
      component: () => import('../view/shoppingcart/cart')
    },
    {
      path: '/express',
      name: 'express',
      meta: {
        label: '订单',
        requireAuth: false,//判断是否需要登录
      },
      component: () => import('../view/shoppingcart/express')
    },
    {
      path: '/addressEdit',
      name: 'express',
      meta: {
        label: '订单',
        requireAuth: false,//判断是否需要登录
      },
      component: () => import('../view/shoppingcart/addressEdit')
    },
    {
      path: '/order',
      name: 'express',
      meta: {
        label: '订单',
        requireAuth: false,//判断是否需要登录
      },
      component: () => import('../view/shoppingcart/order')
    },
    ...punch
  ]
})

router.beforeEach(async (to, from, next) => {
  /** 判断用户是否已经登录 */
  const  user= storage.getUserInfo();
  let state= to.meta.requireAuth;
  if(state){
    if (user==null) {
      next("/login");
    }
  }
  next();

});

export  default router;
