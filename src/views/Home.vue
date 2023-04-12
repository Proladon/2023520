<template>
  <main class="home">
    <Cover />
    <div class="wrapper">
      <Player />
    </div>
  </main>
</template>

<script setup lang="ts">
import Cover from '@/components/Cover.vue'
import Player from '@/components/Player.vue'
</script>

<style scoped lang="postcss">
.home {
  @apply p-[30px];
}

.wrapper {
  @apply relative z-1;
  @apply mt-[10px];
}
</style>
