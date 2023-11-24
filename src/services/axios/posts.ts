import type { ApiResponse } from "@/types";
import axios from "axios";

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const networkInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    _limit: 3,
  },
});

const responseBody = (response: ApiResponse) => response.data;
const request = {
  get: (url: string) => networkInstance.get(url).then(responseBody),
};

export const Post = {
  getPosts: () => request.get('posts'),
};
