<template>
  <div class="breadcrumbs-wrapper">
    <div :key="index" v-for="(breadcrumb, index) in breadcrumbs" class="breadcrumbs">
      <router-link
        class="breadcrumb-link"
        :class="{ dark: theme === 'dark' }"
        v-if="breadcrumb.link"
        :to="{ path: breadcrumb.link, query: $route.query }"
        >
        {{ breadcrumb.title + ' /' }}
        </router-link>
      <p
        class="breadcrumb-link-active"
        :class="{ dark: theme === 'dark' }"
        v-else
      >
      {{ breadcrumb.title }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { IBreadcrumb } from '../../../../router';
import { useThemeStore } from '@/stores/ThemeToggleStore';
import { storeToRefs } from 'pinia';

const route = useRoute();

const breadcrumbs = ref<IBreadcrumb[]>([]);

breadcrumbs.value = route.meta.breadcrumb(route);

watch(route, (newRoute) => {
  breadcrumbs.value = newRoute.meta.breadcrumb(route);
});

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);

</script>

<style src="./AppBreadcrumb.style.scss" lang="scss" scoped>

</style>