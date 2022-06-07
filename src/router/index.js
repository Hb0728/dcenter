import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'
import DataProfiling from '../views/DataProfiling.vue'
import ActivityCenter from '../views/ActivityCenter.vue'
import DocSale from '../views/DocSale.vue'
import UserMoney from '../views/UserMoney.vue'
import sendsuccess from '../views/docmangerChildren/sendSuccess.vue'
import failPending from '../views/docmangerChildren/failPending.vue'
import recycleStation from '../views/docmangerChildren/recycleStation.vue'
import failchange from '../views/docmangerChildren/failchange.vue'
import waitPending from '../views/docmangerChildren/waitPending.vue'
import waitSend from '../views/docmangerChildren/waitSend.vue'
import failadd from '../components/404error/404.vue'


const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/DataProfiling',
    name: 'DataProfiling',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DataProfiling
  },
  {
    path: '/ActivityCenter',
    name: 'ActivityCenter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ActivityCenter
  },
  {
    path: '/sendsuccess',
    name: 'sendsuccess',
    component:sendsuccess
  },{
    path: '/failPending',
    name: 'failPending',
    component:failPending
  },{
    path: '/failchange',
    name: 'failchange',
    component:failchange
  },{
    path: '/recycleStation',
    name: 'recycleStation',
    component:recycleStation
  },{
    path: '/waitSend',
    name: 'waitSend',
    component:waitSend
  },{
    path: '/waitPending',
    name: 'waitPending',
    component:waitPending
  },
  {
    path: '/DocSale',
    name: 'DocSale',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DocSale
  },
  {
    path: '/UserMoney',
    name: 'UserMoney',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UserMoney
  },{
    path: '/404',
    component: failadd,
    name: '404',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }

  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
