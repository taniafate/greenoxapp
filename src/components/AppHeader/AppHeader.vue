<template>
  <header
    class="header"
    :class="{ dark: themeStore.theme === 'dark' }"
    >
    <AppLogo />
    <AppNavBar />
    <ThemeSwitcher />
  </header>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/ThemeToggleStore';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.vue';
import AppLogo from '../UI/AppLogo/AppLogo.vue';
import AppNavBar from '../UI/AppNavBar/AppNavBar.vue';

const themeStore = useThemeStore();
</script>

<style src="./AppHeader.style.scss" lang="scss" scoped>

</style>@/stores/ThemeToggleStore