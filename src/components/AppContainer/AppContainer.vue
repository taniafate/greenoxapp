<template>
  <div :style="style" class="app-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';
import type { IContainerProps } from './AppContainer.types';

const props = defineProps<IContainerProps>();
const { width, isFullWidth } = toRefs(props);

const style = computed(() => {
  return {
    ['--width-container']: isFullWidth.value ? '100%' : width.value + 'px'
  };
});
</script>

<style src="./AppContainer.style.scss" lang="scss" scoped></style>