import { uniqueId } from 'lodash'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath(menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementPath(e.children)
    } : {}
  }))
}

export const menuHeader = supplementPath([
  { path: '/index', title: '首页', icon: 'home' },
])

export const menuAside = supplementPath([
  { path: '/index', title: '首页' },
  { path: '/newManage', title: '新闻管理' },
  { path: '/poa', title: '舆情分析' },
  { path: '/national_data', title: '全国疫情数据' },
  { path: '/overseas_data', title: '海外疫情数据',},
  { path: '/pdq', title: '省份疫情数据查询' },
  { path: '/overseas_time_shaft', title: '国内疫情时间轴' },
  { path: '/national_time_shaft', title: '海外疫情时间轴' },
  { path: '/user_info', title: '个人信息' }
])
