<template>
  <img :src="baby" class="bg" />
</template>

<script setup lang="ts">
import baby from '@/assets/baby.jpg'
</script>

<style scoped lang="postcss">
.bg {
  @apply fixed top-0 bottom-0 left-0 right-0;
  filter: blur(10px) contrast(1.05);
}
</style>
