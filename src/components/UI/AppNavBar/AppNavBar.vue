<template>
  <nav
    class="navBar"
  >
    <router-link class="routerLink" active-class="active" to="/">Home</router-link>
    <router-link class="routerLink" active-class="active" to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
</script>

<style src="./AppNavBar.style.scss" lang="scss" scoped>
  
</style>
