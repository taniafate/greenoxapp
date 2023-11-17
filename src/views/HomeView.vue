<template>
  <div
  class="wrapper"
  >
    <AppHeader />
    <HomeMainLayout />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import AppFooter from '@/components/AppFooter/AppFooter.vue';
import HomeMainLayout from '@/components/HomeMainLayout/HomeMainLayout.vue';
</script>

<style scoped>
  .wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.content {
  flex-grow: 1;
}

.dark {
  background: black;
  color: yellow;
}
</style>
