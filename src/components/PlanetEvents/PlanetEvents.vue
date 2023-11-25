<template>
  <div class="card-wrapper" v-if="store.planetEvents" >
    <div class="card-head">
      <h2 class="card-title">Volcanoes</h2>
      <p class="card-description">{{ store.planetEvents.description }}</p>
    </div>
    <div class="decorator"></div>
    <div class="card-events-wrapper">
      <div class="card-events" v-for="pEvent in store.planetEvents.events" :key="pEvent.id" >
        <div class="card-events-up">
          <h3 class="event-title" >{{ pEvent.title }}</h3>
        </div>
        <div class="card-events-mid">
          <IconGeo />
          <p class="event-geometries" >{{ pEvent.geometries[0].coordinates.join(', ') }}</p>
        </div>
        <div class="card-events-down">
          <p class="event-category">{{  pEvent.categories[0].title }}</p>
          <p class="event-data">{{  pEvent.geometries[0].date.slice(0, 10) || 'not date' }}</p>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { usePlanetEventsStore } from '@/stores/PlanetEventsStore';
import { onMounted } from 'vue';
import IconGeo from '../icons/IconGeo.vue';


const store = usePlanetEventsStore();

onMounted(() => {
  store.getAllEvents();
});


</script>

<style src="./PlanetEvents.style.scss" lang="scss" scoped />