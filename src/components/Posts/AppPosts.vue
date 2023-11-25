<template>
  <div class="postwrapper" v-if="store.posts" >
    <div class="myposts" v-for="post in store.posts" :key="post.id">
      <h3 class="card-title">{{ post.title }}</h3>
      <p class="card-description">{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from "../../stores/PostsStore";
import { onMounted } from 'vue';

const store = usePostsStore();

onMounted(() => {
  store.getAllPosts();
});


</script>

<style src="./AppPosts.style.scss" lang="scss" scoped>

</style>