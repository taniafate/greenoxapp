import { ref } from 'vue';
import { defineStore } from 'pinia';

import { Post } from '../services/axios/posts';
import type { IPostType } from '@/types';


export const usePostsStore = defineStore('PostsStore', () => {

  const posts = ref<IPostType[]>([]);

  async function getAllPosts() {
    try {
      const response = await Post.getPosts();
      if (response) {
        posts.value = response;
      }
      else {
        throw new Error('Error');
      } 
    }
    catch (error: unknown) {
      console.log(error);
    }
  };
  return { posts, getAllPosts };
});