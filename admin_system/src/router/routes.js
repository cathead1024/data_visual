import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: () => import('../views/home/index.vue')
      },
      {
        path: 'newManage',
        name: 'newManage',
        meta: {
          title: '新闻管理',
          auth: true
        },
        component: () => import('../views/newManage/index.vue')
      },
 

   {
        path: 'poa',
        name: 'poa',
        meta: {
          title: '舆情分析',
          auth: true
        },
        component: () => import('../views/poa/index.vue')
      }
      ,{
            path: 'national_data',
            name: 'national_data',
            meta: {
              title: '全国疫情数据',
              auth: true
            },
            component: () => import('../views/nationalData/index.vue')
          },{
            path: 'overseas_data',
            name: 'overseas_data',
            meta: {
              title: '海外疫情数据',
              auth: true
            },
            component: () => import('../views/overseasData/index.vue')
          },{
            path: 'pdq',
            name: 'pdq',
            meta: {
              title: '省份疫情数据查询',
              auth: true
            },
            component: () => import('../views/pdq/index.vue')
          },
        
          {
            path: 'overseas_time_shaft',
            name: 'overseas_time_shaft',
            meta: {
              title: '国内疫情时间轴',
              auth: true
            },
            component: () => import('../views/overseasTimeShaft/index.vue')
          },
 {
            path: 'national_time_shaft',
            name: 'national_time_shaft',
            meta: {
              title: '海外疫情时间轴',
              auth: true
            },
            component: () => import('../views/nationalTimeShaft/index.vue')
          },
 {
            path: 'user_info',
            name: 'user_info',
            meta: {
              title: '个人信息',
              auth: true
            },
            component: () => import('../views/userInfo/index.vue')
          },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
