<template>
  <div class="form-auth" :class="{ dark: themeStore.theme === 'dark' }">
    <h2 class="form-auth-title">Authorization</h2>
    <p class="form-auth-redirect">New to Greenox? Create an account</p>
    <form class="form-auth-style" method="post">
      <label class="auth-label">Enter your email</label>
      <input class="auth-input" type="email" name="auth-email" placeholder="Email*" required>
      <label class="auth-label">Enter your password</label>
      <input class="auth-input" type="password" name="auth-pass" placeholder="Password*" required>
      <button class="form-auth-button" type="submit" name="form-auth-submit" :class="{ dark: themeStore.theme === 'dark' }">Sign in</button>
    </form>
  </div>
</template>

<script setup lang="ts">

import {useThemeStore} from "@/stores/ThemeToggleStore.js";

const themeStore = useThemeStore();
</script>

<style src="./AppAuth.style.scss" lang="scss" scoped>

</style>@/stores/ThemeToggleStore