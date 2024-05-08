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
}

.login-container {
  font-size: 14px;
  width: 100%;
  height: auto;
}

@media only screen and (min-width: 1200px) {
  .login-container {
    display: flex;
    justify-content: center;
  }
}
</style>