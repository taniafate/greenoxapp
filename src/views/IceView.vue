<template>
  <div class="ice-wrapper">
    <AppContainer class="ice-container" :width="1200" :is-full-width="false">
      <PlanetEvents :events="iceEvents!" :theme="theme" />
      <div class="decorator" :class="{ dark: theme === 'dark' }">
        <div class="decorator-content">
          <EventSticker class="decorator-sticker"/>
        </div>
      </div>
    </AppContainer>
  </div>
</template> 

<script setup lang="ts">
import EventSticker from '@/assets/pictures/EventSticker.vue';
import { useThemeStore } from '@/stores/ThemeToggleStore';
import { storeToRefs } from 'pinia';
import { useIceEventsStore } from '@/stores/IceEventsStore';
import { onMounted } from 'vue';
import PlanetEvents from '@/components/PlanetEvents/PlanetEvents.vue';

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);

const store = useIceEventsStore();
const { iceEvents } = storeToRefs(store);

const { getIceEvents } = store;

onMounted(() => {
  getIceEvents();
});
</script>

<style lang="scss" scoped>
  .ice-wrapper {
  flex-grow: 1;
  font-size: 14px;
}

.ice-container {
  font-size: 14px;
}

.decorator {
  width: 180px;
  height: 540px;
  background: var(--light-400);
  border-radius: 18px;
  margin-left: 10px;
  padding: 20px;
  z-index: 0;
  display: flex;
  justify-content: center;

  .decorator-content {
    width: 156px;
    height: 100%;
    background: var(--light-400);
    background-image: url("../assets/pictures/iceImage.png");
    border-radius: 16px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
    background-repeat:no-repeat;
    background-position: center center;
    z-index: 0;
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
  background: var(--dark-300);
}

@media only screen and (max-width: 767px) {

  .ice-container {
    display: flex;
    flex-direction: column;
  }
  .decorator {
    display: none;
  }
}

@media only screen and (min-width: 767px) {
  .ice-container {
    display: flex;
    justify-content: center;
  }
}
</style>