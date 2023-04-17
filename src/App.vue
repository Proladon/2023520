<template>
  <main class="app">
    <RouterView class="relative z-1 w-full h-full" />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Quicksand:wght@400;500;600&display=swap');

html,
body,
#app,
.app {
  @apply w-full h-full;
  @apply overflow-hidden;
  @apply bg-gray-700;
  font-family: 'Noto Sans TC', sans-serif;
  font-family: 'Quicksand', sans-serif;
}
</style>

<style scoped lang="postcss">
/* .app {
  @apply bg-gray-700;
} */
</style>
