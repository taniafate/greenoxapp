<template>
  <section class="intro-section" :class="{ dark: theme === 'dark' }">
    <div class="intro-slogan" :class="{ dark: theme === 'dark' }">
      <p class="intro-slogan-prim">The brightest planetary events are in our app</p>
      <p class="intro-slogan-sec">For business and personal use</p>
      <AppIntroButton />
    </div>
    <div class="intro-image"></div>
  </section>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/ThemeToggleStore';
import { storeToRefs } from 'pinia';
import AppIntroButton from '../UI/AppIntroButton/AppIntroButton.vue';

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);
</script>

<style src="./AppIntro.style.scss" lang="scss" scoped></style>