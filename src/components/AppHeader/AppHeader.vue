<template>
  <header
    class="header"
    :class="{ dark: theme === 'dark' }"
    >
    <AppLogo />
    <AppNavBar />
    <div class="header-right-side">
      <AppAuthLinks />
      <ThemeSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts">

import ThemeSwitcher from '../UI/ThemeSwitcher/ThemeSwitcher.vue';
import AppLogo from '../UI/AppLogo/AppLogo.vue';
import AppNavBar from '../UI/AppNavBar/AppNavBar.vue';
import AppAuthLinks from '../UI/AppAuthLinks/AppAuthLinks.vue';
import { useThemeStore } from '@/stores/ThemeToggleStore';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);

</script>

<style src="./AppHeader.style.scss" lang="scss" scoped>

</style>