<template>
  <div class="event-wrapper">
    <AppContainer class="event-container" :width="1200" :is-full-width="false">
      <AppGallary />
    </AppContainer>
  </div>
</template>


<script setup lang="ts">
import AppGallary from '@/components/AppGallary/AppGallary.vue';
import AppContainer from '../components/AppContainer/AppContainer.vue'; 

</script>

<style lang="scss" scoped>
.event-wrapper {
  flex-grow: 1;
  font-size: 14px;
}

.event-container {
  font-size: 14px;
}

@media only screen and (min-width: 1200px) {
  .event-container {
    display: flex;
    justify-content: center;
  }
}
</style>
