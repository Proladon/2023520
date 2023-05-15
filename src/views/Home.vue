<template>
  <main class="home">
    <Bg />
    <div class="relative z-1 flex flex-col h-full">
      <Cover />
      <Player class="mt-[15px]" />
      <div class="flex-1 items-center h-full relative">
        <Lyric class="absolute top-0 bottom-0 left-0 right-0 m-auto" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Bg from '@/components/Bg.vue'
import Cover from '@/components/Cover.vue'
import Player from '@/components/Player.vue'
import Lyric from '@/components/Lyric/Lyric.vue'

import { ref } from 'vue'

const showStory = ref(true)
</script>

<style scoped lang="postcss">
.home {
  @apply w-full h-full;
  @apply max-w-[500px] m-auto;
  @apply p-[30px] overflow-y-auto;
}
</style>
