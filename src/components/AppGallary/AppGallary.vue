<template>
  <section class="gallary-section" :class="{ dark: theme === 'dark' }">
    <button
      v-for="gallaryButton in gallaryButtons"
      :key="gallaryButton.title"
      @click="$router.push(gallaryButton.RoutesLink)"
      class="gallary-item"
      :class="{ dark: theme === 'dark' }"
      >
      <div class="gallary-item-image" :style="{ backgroundImage: `url(${(gallaryButton.bgImage)})` }"></div>
      <div class="gallary-item-title" :class="{ dark: theme === 'dark' }">
        <span>
          {{ gallaryButton.title }}
        </span>
      </div>
    </button>
  </section>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/ThemeToggleStore';
import { gallaryButtons } from './AppGallary.data';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);

</script>

<style src="./AppGallary.style.scss" lang="scss" scoped>

</style>