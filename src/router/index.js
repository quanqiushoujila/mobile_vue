import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/public/index'
    },
    {
      path: '/public',
      name: 'public',
      component: () => import('@/page/public'),
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('@/page/home')
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/page/search')
    },
    {
      path: '*',
      redirect: '/public/index'
    }
  ]
})
