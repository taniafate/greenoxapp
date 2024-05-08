<template>
  <div class="card-wrapper" v-if="events" :class="{ dark: theme === 'dark' }">
    <div class="card-head">
      <h2 class="card-title" :class="{ dark: theme === 'dark' }">{{ events.title.slice(14) }}</h2>
      <p class="card-description">{{ events.description }}</p>
    </div>
    <div class="decorator" :class="{ dark: theme === 'dark' }"></div>
    <div class="card-events-wrapper" v-if="events.events.length > 0">
      <div
        class="card-events"
        :class="{ dark: theme === 'dark' }"
        v-for="event in events.events"
        :key="event.id"
      >
        <div class="card-events-up">
          <h3 class="event-title" :class="{ dark: theme === 'dark' }">{{ event.title }}</h3>
        </div>
        <div class="card-events-mid">
          <IconGeo />
          <p
            class="event-geometries"
            :class="{ dark: theme === 'dark' }"
          >
            {{ event.geometries[0].coordinates.join(', ') }}
          </p>
        </div>
        <div class="card-events-down">
          <p class="event-category">{{ event.categories[0].title }}</p>
          <p class="event-data">{{ event.geometries[0].date.slice(0, 10) }}</p>
        </div>
      </div>
    </div>
    <div class="nodata-message" v-else>There are no active events yet.</div>
  </div>
  <div v-else class="card-default" :class="{ dark: theme === 'dark' }">Loading...</div>
</template>

<script setup lang="ts">
import type { NASAApiResponse } from '@/types';
import IconGeo from '../../assets/icons/IconGeo.vue';

defineProps<{
  events: NASAApiResponse,
  theme: string
}>()
</script>

<style src="./PlanetEvents.style.scss" lang="scss" scoped></style>