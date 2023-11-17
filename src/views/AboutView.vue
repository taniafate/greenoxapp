<template>
  <div class="wrapper">
    <AppHeader />
    <main>About Page</main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import AppFooter from '@/components/AppFooter/AppFooter.vue';
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
}
</style>
