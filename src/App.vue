<template>
  <main class="app">
    <img :src="baby" class="bg" />
    <RouterView class="relative z-1 w-full h-full" />
  </main>
</template>

<script setup lang="ts">
import baby from '@/assets/baby.jpg'
import { RouterView } from 'vue-router'
</script>

<style>
html,
body,
.app {
  @apply overflow-hidden;
  @apply bg-gray-700;
}
</style>

<style scoped lang="postcss">
/* .app {
  @apply bg-gray-700;
} */

.bg {
  @apply fixed top-0 bottom-0 left-0 right-0;
  filter: blur(10px) contrast(1.05);
}
</style>
