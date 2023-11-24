import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout/MainLayout.vue';
import { RoutesPaths } from '@/libs/constants/router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutesPaths.HOME,
      name: RoutesPaths.HOME,
      component: HomeView,
      meta: {
        layout: MainLayout,
        title: 'Home',
      }
    },
    {
      path: RoutesPaths.ABOUT,
      name: RoutesPaths.ABOUT,
      component: () => import('../views/AboutView.vue'),
      meta: {
        layout: MainLayout,
        title: 'About',
      }
    },
    {
      path: RoutesPaths.LOGIN,
      name: RoutesPaths.LOGIN,
      component: () => import('../views/LoginView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Login',
      }
    },
  ]
})

export default router;
