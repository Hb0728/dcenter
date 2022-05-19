import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import DataProfiling from '../views/DataProfiling.vue'
import ActivityCenter from '../views/ActivityCenter.vue'
import DocManage from '../views/DocManage.vue'
import DocSale from '../views/DocSale.vue'
import UserMoney from '../views/UserMoney.vue'


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
    path: '/DocManage',
    name: 'DocManage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DocManage
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
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
