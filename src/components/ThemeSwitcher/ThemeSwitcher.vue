<template>
  <button id="themeButton" v-if="!themeStore.darkTheme" class="themeSwitcher" :class="{ dark: themeStore.darkTheme }" @click="themeStore.toggleTheme()">
    <IconTheme />
    <span class="themeSwitcherSpan">
      dark
    </span>
  </button>
  <button id="themeButton" v-else class="themeSwitcher" :class="{ dark: themeStore.darkTheme }" @click="themeStore.toggleTheme()">
    <IconTheme />
    <span class="themeSwitcherSpan">
      light
    </span>
  </button>
</template>

<script setup lang="ts"> 
import {useThemeStore} from "@/stores/themeSwitcherStore";
import IconTheme from '../../components/icons/IconTheme.vue';

const themeStore = useThemeStore();
</script>

<style src="./ThemeSwitcher.style.scss" lang="scss" scoped>
  
</style>@/stores/themeSwitcherStore