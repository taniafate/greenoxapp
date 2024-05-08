import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { NASAApiResponse } from '@/types';
import { PlanetEvent } from '@/services/axios/planetEvents';

export const useVolcanoesEventsStore = defineStore('VolcanoesEventsStore', () => {
  const volcanoesEvents = ref<NASAApiResponse>();

  async function getVolcanoesEvents() {
    try {
      const response = await PlanetEvent.getVolcanoes();
      if (response) {
        volcanoesEvents.value = response;
      }
      else {
        throw new Error('Error');
      } 
    }
    catch (error: unknown) {
      console.log(error);
    }
  };
  return { volcanoesEvents, getVolcanoesEvents };
});
