import {ref} from 'vue';
import {defineStore} from 'pinia';
import router from '@/router';

export const useThemeStore = defineStore('ThemeSwitcherStore', {
  state: () => {
    const theme = ref<string>(localStorage.getItem('theme') || 'dark')

    if (!router.currentRoute.value.query.theme) {
      router.replace({ query: { ...router.currentRoute.value.query, theme: [theme.value] } })
    }

    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', theme.value);

      router.push({  query: { ...router.currentRoute.value.query, theme: [theme.value] } })
    }

    return {
      theme,
      toggleTheme
    }
  }
})