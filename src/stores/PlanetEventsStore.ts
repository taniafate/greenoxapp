import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { NASAApiResponse } from '@/types';
import { PlanetEvent } from '@/services/axios/planetEvents';


export const usePlanetEventsStore = defineStore('PlanetEventsStore', () => {

  const planetEvents = ref<NASAApiResponse>();

  async function getAllEvents() {
    try {
      const response = await PlanetEvent.getEvents();
      if (response) {
        planetEvents.value = response;
      }
      else {
        throw new Error('Error');
      } 
    }
    catch (error: unknown) {
      console.log(error);
    }
  };
  return { planetEvents, getAllEvents };
});
