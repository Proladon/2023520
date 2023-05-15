<template>
  <main class="app">
    <div class="view-wrapper"></div>
    <Landing v-show="!landed" @confirm="onLanded" />
    <Home v-show="landed" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Home from '@/views/Home.vue'
import Landing from '@/views/Landing.vue'
import { usePlayerStore } from '@/stores/player'

const landed = ref(false)

const { play } = usePlayerStore()

const onLanded = () => {
  landed.value = true
  play()
}
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
