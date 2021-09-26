import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/Views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cv',
    name: 'CV',
    component: () => import('@/Views/CV.vue')
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: () => import('@/Views/ThankYou.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
