import { createRouter, createWebHistory } from 'vue-router'

import ShopHome from '@/views/ShopLog.vue'
import ShopProfile from '@/views/ShopCart.vue'


const routes = [
  {
    path: '/',
    name: 'shophome',
    component: ShopHome
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopProfile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
