import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:user_id',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/hotel/:hotel_id',
      name: 'hotel',
      component: () => import('../views/HotelPage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterPage.vue')
    },
    {
      path: '/hotels/:city',
      name: 'city_hotels',
      component: () => import('../views/CityHotelsPage.vue')
    },
  ]
})

export default router
