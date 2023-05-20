<template>
  <div
    class="control-mask"
    :class="{
      showing: !isPlaying,
      hiding: isPlaying
    }"
    @click="emits('play')"
  >
    <div class="text-white text-center">
      <Icon size="30" color="white"><Pause48Filled /></Icon>
      <p>PAUSING</p>
    </div>

    <div class="mt-[15px]">(Click anywhere to resume)</div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores/player'
import { computed } from 'vue'
import { get } from 'lodash-es'
import { Icon } from '@vicons/utils'
import { Pause48Filled } from '@vicons/fluent'

const emits = defineEmits(['play'])

const playerStore = usePlayerStore()

const isPlaying = computed(() => get(playerStore, 'player.isTimerPlaying'))
</script>

<style scoped lang="postcss">
.control-mask {
  @apply fixed top-0 left-0 bottom-0 right-0 z-20;
  @apply flex flex-col justify-center items-center;
  @apply text-white;
}

.showing {
  @apply bg-dark-500 opacity-85;
  transition: ease-in-out 0.8s;
}

.hiding {
  @apply opacity-0;
  transition: ease-in-out 0.8s;
}
</style>
