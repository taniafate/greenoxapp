<template>
  <button id="themeButton" v-if="themeStore.theme !== 'dark'" class="themeSwitcher" :class="{ dark: themeStore.theme === 'dark' }" @click="themeStore.toggleTheme()">
    <IconTheme />
    <span class="themeSwitcherSpan">
      dark
    </span>
  </button>
  <button id="themeButton" v-else class="themeSwitcher" :class="{ dark: themeStore.theme === 'dark' }"  @click="themeStore.toggleTheme()">
    <IconTheme />
    <span class="themeSwitcherSpan">
      light
    </span>
  </button>
</template>

<script setup lang="ts"> 
import IconTheme from '../icons/IconTheme.vue';
import { useThemeStore } from '@/stores/ThemeToggleStore';

const themeStore = useThemeStore();

</script>

<style src="./ThemeSwitcher.style.scss" lang="scss" scoped>
  
</style>@/stores/ThemeToggleStore