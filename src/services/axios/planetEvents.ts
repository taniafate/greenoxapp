import type { NASAApiResponse } from "@/types";
import axios, { type AxiosResponse } from "axios";

const API_BASE_URL = 'https://eonet.gsfc.nasa.gov/api/v2.1/';
const NASA_API_KEY = 'DEMO_KEY'

export const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    limit: 4,
  },
});

const responseBody = (response: AxiosResponse<NASAApiResponse>) => response.data;
const request = {
  get: (url: string) => apiInstance.get(url).then(responseBody),
};

export const PlanetEvent = {
  getEvents: () => request.get(`categories/12?status=open&api_key=${NASA_API_KEY}`),
};