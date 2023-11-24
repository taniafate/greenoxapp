<template>
  <div class="about-wrapper">
    <AppContainer class="about-container" :width="1200" :is-full-width="false">
      <AppPosts />
    </AppContainer>
  </div>
</template>


<script setup lang="ts">
import AppPosts from '@/components/Posts/AppPosts.vue';
import AppContainer from '../components/AppContainer/AppContainer.vue'; 
</script>

<style lang="scss" scoped>
.about-wrapper {
  flex-grow: 1;
  font-size: 14px;
}

.about-container {
  font-size: 14px;
}
</style>
