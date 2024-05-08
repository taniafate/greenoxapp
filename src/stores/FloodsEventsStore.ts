import { PlanetEvent } from "@/services/axios/planetEvents";
import type { NASAApiResponse } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFloodsEventsStore = defineStore('FloodsEventsStore', () => {
  const floodsEvents = ref<NASAApiResponse>();

  async function getFloodsEvents() {
    try {
      const response = await PlanetEvent.getFloods();
      if (response) {
        floodsEvents.value = response;
      }
      else {
        throw new Error('Error');
      } 
    }
    catch (error: unknown) {
      console.log(error);
    }
  };
  return { floodsEvents, getFloodsEvents };
});