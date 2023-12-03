<template>
  <button id="themeButton" v-if="theme !== 'dark'" class="themeSwitcher" :class="{ dark: theme === 'dark' }" @click="toggleTheme()">
    <IconTheme />
    <span class="themeSwitcherSpan">
      dark
    </span>
  </button>
  <button id="themeButton" v-else class="themeSwitcher" :class="{ dark: theme === 'dark' }"  @click="toggleTheme()">
    <IconTheme />
    <span class="themeSwitcherSpan">
      light
    </span>
  </button>
</template>

<script setup lang="ts"> 
import { useThemeStore } from '@/stores/ThemeToggleStore';
import IconTheme from '../../../assets/icons/IconTheme.vue';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { theme, toggleTheme } = storeToRefs(themeStore);

</script>

<style src="./ThemeSwitcher.style.scss" lang="scss" scoped>
  
</style>