<template>
  <footer
    class="footer"
    :class="{ dark: themeStore.theme === 'dark' }"
  >
   <span>info</span>
  </footer>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/ThemeToggleStore.js';


const themeStore = useThemeStore();

</script>

<style src="./AppFooter.style.scss" lang="scss" scoped>

</style>@/stores/ThemeToggleStore