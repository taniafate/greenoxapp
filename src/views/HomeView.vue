<template>
  <div class="home-wrapper">
    <AppContainer class="home-container" :width="1200" :is-full-width="false">
      <AppIntro />
    </AppContainer>
  </div>
</template>


<script setup lang="ts">
import AppContainer from '../components/AppContainer/AppContainer.vue';
import AppIntro from '../components/AppIntro/AppIntro.vue';
</script>

<style lang="scss" scoped>
  .home-wrapper {
  flex-grow: 1;
  font-size: 14px;
}

.home-container {
  font-size: 14px;
}

@media only screen and (max-width: 767px) {

  .home-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media only screen and (min-width: 767px) {
  .home-container {
    display: flex;
    justify-content: center;
  }
}
</style>