import {ref} from 'vue';
import {defineStore} from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => {
    const darkTheme = ref<boolean>(false)

    function toggleTheme() {
      darkTheme.value = !darkTheme.value; 
      
        if (darkTheme.value) {
          document.body.classList.add('dark')
        } else {
          document.body.classList.remove('dark')
        }
    }

    return {
      darkTheme,
      toggleTheme
    }
  }
})