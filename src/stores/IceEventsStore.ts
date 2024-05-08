import { PlanetEvent } from "@/services/axios/planetEvents";
import type { NASAApiResponse } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useIceEventsStore = defineStore('IceEventsStore', () => {
  const iceEvents = ref<NASAApiResponse>();

  async function getIceEvents() {
    try {
      const response = await PlanetEvent.getIce();
      if (response) {
        iceEvents.value = response;
      }
      else {
        throw new Error('Error');
      } 
    }
    catch (error: unknown) {
      console.log(error);
    }
  };
  return { iceEvents, getIceEvents };
});