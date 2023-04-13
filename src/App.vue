<template>
  <main class="app">
    <RouterView class="relative z-1 w-full h-full" />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style>
html,
body,
#app,
.app {
  @apply w-full h-full;
  @apply overflow-hidden;
  @apply bg-gray-700;
}
</style>

<style scoped lang="postcss">
/* .app {
  @apply bg-gray-700;
} */
</style>
