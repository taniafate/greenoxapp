import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { ROUTES_PATHS } from '@/libs/constants/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: HomeView
    },
    {
      path: ROUTES_PATHS.ABOUT,
      name: ROUTES_PATHS.ABOUT,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router;
