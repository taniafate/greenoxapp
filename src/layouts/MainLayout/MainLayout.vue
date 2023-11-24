import PageHeader from '@/components/PageHeader/PageHeader.vue';
<template>
  <div class="wrapper">
    <AppHeader />
    <AppContent>
      <slot></slot>
    </AppContent>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter/AppFooter.vue';
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import AppContent from '@/components/AppContent/AppContent.vue';

</script>

<style src="./MainLayout.style.scss" lang="scss" scoped></style>