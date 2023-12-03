import { PlanetEvent } from "@/services/axios/planetEvents";
import type { NASAApiResponse } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useWildfiresEventsStore = defineStore('WildfiresEventsStore', () => {

  const wildfiresEvents = ref<NASAApiResponse>();

  async function getWildfiresEvents() {
    try {
      const response = await PlanetEvent.getWildfires();
      if (response) {
        wildfiresEvents.value = response;
      }
      else {
        throw new Error('Error');
      } 
    }
    catch (error: unknown) {
      console.log(error);
    }
  };
  return { wildfiresEvents, getWildfiresEvents };
});