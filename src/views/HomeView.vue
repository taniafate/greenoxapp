<template>
  <div class="home-wrapper">
    <AppContainer class="home-container" :width="1200" :is-full-width="false">
      <PlanetEvents />
      <div class="decorator" :class="{ dark: themeStore.theme === 'dark' }">
        <div class="decorator-content">
          <EventSticker class="decorator-sticker" />
        </div>
      </div>
    </AppContainer>
  </div>
</template>


<script setup lang="ts">

import { useThemeStore } from '../stores/ThemeSwitcherStore';
import AppContainer from '../components/AppContainer/AppContainer.vue';
import PlanetEvents from '../components/PlanetEvents/PlanetEvents.vue';
import EventSticker from '../components/pictures/EventSticker.vue';

const themeStore = useThemeStore();


</script>

<style lang="scss" scoped>
  .home-wrapper {
  flex-grow: 1;
  font-size: 14px;
}

.home-container {
  font-size: 14px;
}

.decorator {
  width: 180px;
  height: 500px;
  background: #e1e1e1;
  border-radius: 18px;
  margin-left: 10px;
  padding: 12px;
  z-index: 0;

  .decorator-content {
    width: 100%;
    height: 100%;
    background: #e1e1e1;
    background-image: url("../assets/volcanoesImage.png");
    border-radius: 16px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
    background-repeat:no-repeat;
    background-position: center center;
    z-index: -1;
    position: relative;

    .decorator-sticker {
      z-index: 2;
      position:absolute;
      top: 18px;
      right: -4px;
    }
  }
}

.decorator.dark {
  background: #373737;
}
</style>