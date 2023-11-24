<template>
  <div class="login-wrapper">
    <AppContainer class="login-container" :width="1200" :is-full-width="false">
      <AppAuth />
    </AppContainer>
  </div>
</template>


<script setup lang="ts">
import AppAuth from '@/components/AppAuth/AppAuth.vue';


</script>

<style lang="scss" scoped>
.login-wrapper {
  flex-grow: 1;
  font-size: 14px;
  display: flex;
  justify-content: center;
}

.login-container {
  font-size: 14px;
}
</style>