<template>
  <main class="app">
    <div class="view-wrapper"></div>
    <Landing v-if="!landed" @confirm="onLanded" @close="landed = true" />
    <Home />
    <ControlMask v-if="landed" @play="play" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Home from '@/views/Home.vue'
import Landing from '@/views/Landing.vue'
import ControlMask from './components/ControlMask.vue'
import { usePlayerStore } from '@/stores/player'

const landed = ref(false)

const { play } = usePlayerStore()

const onLanded = () => {
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
