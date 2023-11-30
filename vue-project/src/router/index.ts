import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: () => import('../views/HotelPage.vue')
    },
  ]
})

export default router
