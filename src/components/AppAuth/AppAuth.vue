<template>
  <div class="form-auth" :class="{ dark: themeStore.theme === 'dark' }">
    <h2 class="form-auth-title">Authorization</h2>
    <div class="form-auth-redirect">
      <p>New to Greenox?</p>
      <RouterLink
        class="form-auth-redirect-link"
        :class="{ dark: themeStore.theme === 'dark' }"
        to="/"
        >
          <p>Create an account</p>
      </RouterLink>
    </div>
    <form class="form-auth-style" method="post">
      <label class="auth-label">Enter your email</label>
      <input class="auth-input email" type="email" name="auth-email" placeholder="Email*" required>
      <label class="auth-label">Enter your password</label>
      <input class="auth-input password" type="password" name="auth-pass" placeholder="Password*" required>
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