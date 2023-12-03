import { createRouter, createWebHistory, type RouteLocationNormalizedLoaded } from 'vue-router';
import MainLayout from '@/layouts/MainLayout/MainLayout.vue';
import { RoutesLinks, RoutesNames } from '@/libs/constants/router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutesLinks.HOME,
      name: RoutesNames.HOME,
      component: HomeView,
      meta: {
        layout: MainLayout,
        title: 'Home',
        breadcrumb: () => [
          {
            title: 'Home'
          }
        ]
      }
    },
    {
      path: RoutesLinks.EVENTS,
      name: RoutesNames.EVENTS,
      component: () => import('../views/EventView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Events',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home',
            link: RoutesLinks.HOME
          },
          {
            title: route.meta.title
          }
        ]
      }
    },
    {
      path: RoutesLinks.VOLCANOES,
      name: RoutesNames.VOLCANOES,
      component: () => import('../views/VolcanoesView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Volcanoes',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home',
            link: RoutesLinks.HOME
          },
          {
            title: 'Events',
            link: RoutesLinks.EVENTS
          },
          {
            title: route.meta.title
          }
        ]
      }
    },
    {
      path: RoutesLinks.ICE,
      name: RoutesNames.ICE,
      component: () => import('../views/IceView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Ice',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home',
            link: RoutesLinks.HOME
          },
          {
            title: 'Events',
            link: RoutesLinks.EVENTS
          },
          {
            title: route.meta.title
          }
        ]
      }
    },
    {
      path: RoutesLinks.WILDFIRES,
      name: RoutesNames.WILDFIRES,
      component: () => import('../views/WildfiresView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Wildfires',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home',
            link: RoutesLinks.HOME
          },
          {
            title: 'Events',
            link: RoutesLinks.EVENTS
          },
          {
            title: route.meta.title
          }
        ]
      }
    },
    {
      path: RoutesLinks.FLOODS,
      name: RoutesNames.FLOODS,
      component: () => import('../views/FloodsView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Floods',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home',
            link: RoutesLinks.HOME
          },
          {
            title: 'Events',
            link: RoutesLinks.EVENTS
          },
          {
            title: route.meta.title
          }
        ]
      }
    },
    {
      path: RoutesLinks.LOGIN,
      name: RoutesNames.LOGIN,
      component: () => import('../views/LoginView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Login',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Home',
            link: RoutesLinks.HOME
          },
          {
            title: route.meta.title
          }
        ]
      }
    },
  ]
})

export default router;
