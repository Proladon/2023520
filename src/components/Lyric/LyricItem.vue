<template>
  <div v-if="showLyric" class="lyric-item fade-in" :class="{ 'fade-out': fade }">
    {{ item.text }}
  </div>
</template>

<script setup lang="ts">
import type { LyricItem } from '@/stores/player'
import { computed, ref, watch, toRef } from 'vue'

const props = defineProps<{
  item: LyricItem
  curTime: number
}>()

const fade = ref(false)

const showLyric = computed(() => {
  return props.item.to >= props.curTime && props.item.from <= props.curTime
})

watch(toRef(props, 'curTime'), () => {
  if (fade.value) return
  if (props.curTime >= props.item.to - 0.5) fade.value = true
})
</script>

<style scoped lang="postcss">
.lyric-item {
  @apply text-center;
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

.fade-out {
  animation: fadeout 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 100;
    transform: translateY(0px);
  }
}

@keyframes fadeout {
  from {
    opacity: 100;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
