<template>
  <div class="content" :class="{ dark: theme === 'dark' }">
    <AppBreadcrumb />
    <AppContainer :is-full-width="device === 'mobile' ? true : false" :width="deviceWidth">
      <slot></slot>
    </AppContainer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import AppContainer from '../AppContainer/AppContainer.vue';
import AppBreadcrumb from '../../components/UI/AppBreadcrumb/AppBreadcrumb.vue';
import { useMedia } from '../../composables/useMedia';
import { useThemeStore } from '@/stores/ThemeToggleStore';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);

const { device } = useMedia();

const deviceWidth = computed(() => {
  if (device.value === 'desktop') return 1200;
  if (device.value === 'tablet') return 700;
  return 700;
});
</script>

<style src="./AppContent.style.scss" lang="scss" scoped />