<template>
  <footer
    class="footer"
    :class="{ dark: theme === 'dark' }"
  >
    <span class="footer-logo">greenox</span>
    <IconGitHub />
  </footer>
</template>

<script setup lang="ts">

import { useThemeStore } from '@/stores/ThemeToggleStore';
import IconGitHub from '../../assets/icons/IconGitHub.vue';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);


</script>

<style src="./AppFooter.style.scss" lang="scss" scoped>

</style>