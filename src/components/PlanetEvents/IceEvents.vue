<template>
  <div class="card-wrapper" v-if="iceEvents" :class="{ dark: theme === 'dark' }">
    <div class="card-head">
      <h2 class="card-title" :class="{ dark: theme === 'dark' }">{{ iceEvents.title.slice(14) }}</h2>
      <p class="card-description">{{ iceEvents.description }}</p>
    </div>
    <div class="decorator" :class="{ dark: theme === 'dark' }"></div>
    <div class="card-events-wrapper" v-if="iceEvents.events.length > 0">
      <div class="card-events" :class="{ dark: theme === 'dark' }" v-for="pEvent in iceEvents.events" :key="pEvent.id" >
        <div class="card-events-up">
          <h3 class="event-title" :class="{ dark: theme === 'dark' }">{{ pEvent.title }}</h3>
        </div>
        <div class="card-events-mid">
          <IconGeo />
          <p class="event-geometries" :class="{ dark: theme === 'dark' }">{{ pEvent.geometries[0].coordinates.join(', ') }}</p>
        </div>
        <div class="card-events-down">
          <p class="event-category">{{  pEvent.categories[0].title }}</p>
          <p class="event-data ice">{{  pEvent.geometries[0].date.slice(0, 10) }}</p>
        </div>
      </div>
    </div>
    <div class="nodata-message" v-else>There are no active events yet.</div>
  </div>
  <div v-else class="card-default" :class="{ dark: theme === 'dark' }">Loading...</div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/ThemeToggleStore';
import { onMounted } from 'vue';
import IconGeo from '../../assets/icons/IconGeo.vue';
import { useIceEventsStore } from '@/stores/IceEventsStore';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);

const store = useIceEventsStore();
const { iceEvents } = storeToRefs(store);

const { getIceEvents } = store;

onMounted(() => {
  getIceEvents();
});

</script>

<style src="./PlanetEvents.style.scss" lang="scss" scoped>

</style>