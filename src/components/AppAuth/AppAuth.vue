<template>
  <div class="form-auth" :class="{ dark: theme === 'dark' }">
    <h2 class="form-auth-title">Authorization</h2>
    <div class="form-auth-redirect">
      <p>New to Greenox?</p>
      <router-link
        class="form-auth-redirect-link"
        :class="{ dark: theme === 'dark' }"
        to="/"
        >
          <p>Create an account</p>
      </router-link>
    </div>
    <form class="form-auth-style" method="post">
      <label class="auth-label">Enter your email</label>
      <input class="auth-input email" type="email" name="auth-email" placeholder="Email*" required>
      <label class="auth-label">Enter your password</label>
      <input class="auth-input password" type="password" name="auth-pass" placeholder="Password*" required>
      <button class="form-auth-button" type="submit" name="form-auth-submit" :class="{ dark: theme === 'dark' }">Sign in</button>
    </form>
    <AuthDarkSticker class="auth-sticker" v-if="theme === 'dark'" />
    <AuthLightSticker class="auth-sticker" v-else />
  </div>
</template>

<script setup lang="ts">
import AuthDarkSticker from '@/assets/pictures/AuthDarkSticker.vue';
import AuthLightSticker from '@/assets/pictures/AuthLightSticker.vue';
import { useThemeStore } from '@/stores/ThemeToggleStore';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);

</script>

<style src="./AppAuth.style.scss" lang="scss" scoped>

</style>