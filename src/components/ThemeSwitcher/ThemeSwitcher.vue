<template>
  <button id="themeButton" v-if="themeStore.theme !== 'dark'" class="themeSwitcher" :class="{ dark: themeStore.theme === 'dark' }" @click="themeStore.toggleTheme()">
    <IconTheme />
    <span class="themeSwitcherSpan">
      dark
    </span>
  </button>
  <button id="themeButton" v-else class="themeSwitcher" :class="{ dark: themeStore.theme === 'dark' }" @click="themeStore.toggleTheme()">
    <IconTheme />
    <span class="themeSwitcherSpan">
      light
    </span>
  </button>
</template>

<script setup lang="ts"> 
import {useThemeStore} from "../../stores/ThemeSwitcherStore";
import IconTheme from '../../components/icons/IconTheme.vue';

const themeStore = useThemeStore();
</script>

<style src="./ThemeSwitcher.style.scss" lang="scss" scoped>
  
</style>