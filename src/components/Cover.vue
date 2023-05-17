<template>
  <div class="cover">
    <img class="cover-img" :src="baby" alt="My Little Jessica" />

    <div class="cover-info-wrapper">
      <p class="song-name">Crush On You</p>
      <p class="name">2023 / 5 / 20</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import baby from '@/assets/baby.jpg'
</script>

<style scoped lang="postcss">
.cover {
  @apply w-[70%];
  @apply overflow-hidden m-auto;
  @apply rounded-md;
  @apply shadow-xl;
  @apply shadow-dark-700;
  @apply relative;
}

.cover-info-wrapper {
  @apply text-white;
  /* @apply absolute top-0 bottom-0 left-0 right-0; */
}
.song-name {
  @apply text-center;
  @apply tracking-[5px];
  @apply absolute bottom-[60px] left-0 right-0;
}
.name {
  @apply text-center text-[12px];
  @apply tracking-[1px];
  @apply absolute bottom-[30px] left-0 right-0;
}
</style>
