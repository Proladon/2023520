<template>
  <main class="home">
    <!-- <Bg /> -->
    <!-- <Cover /> -->
    <Player class="mt-[15px]" />
    <Lyric />
  </main>
</template>

<script setup lang="ts">
import Bg from '@/components/Bg.vue'
import Cover from '@/components/Cover.vue'
import Player from '@/components/Player.vue'
import Lyric from '@/components/Lyric/Lyric.vue'
</script>

<style scoped lang="postcss">
.home {
  @apply max-w-[500px] m-auto;
  @apply p-[30px] overflow-y-auto;
}
</style>
