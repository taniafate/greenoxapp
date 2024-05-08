<template>
  <nav
    class="navBar"
  >
    <router-link class="routerLink" active-class="active" to="/">Home</router-link>
    <router-link class="routerLink" active-class="active" to="/events">Events</router-link>
  </nav>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<style src="./AppNavBar.style.scss" lang="scss" scoped></style>
