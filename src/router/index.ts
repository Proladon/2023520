import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Landing from '@/views/Landing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/music',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
