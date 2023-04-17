<template>
  <div class="player">
    <div class="progress" id="progressBar" ref="progress">
      <div class="album-info" v-if="player.currentTrack">
        <!-- <div class="track-name">{{ player.currentTrack.name }}</div> -->
      </div>
      <div class="progress__bar">
        <div class="progress__current" :style="{ width: `${player.barWidth}%` }"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores/player'
import { onMounted, ref } from 'vue'

const { player, initPlayer } = usePlayerStore()
const progress = ref()
onMounted(() => {
  initPlayer()

  const el = document.getElementById('progressBar')
  player.playerProgressBar = el
})
</script>

<style scoped lang="postcss">
.progress {
  @apply w-full select-none;
}

.progress__bar {
  height: 6px;
  width: 100%;
  cursor: pointer;
  background-color: #d0d8e6;
  display: inline-block;
  border-radius: 10px;
}

.progress__current {
  height: inherit;
  width: 0%;
  background-color: #354052;
  border-radius: 10px;
}

.track-name {
  @apply text-center text-white;
}
</style>
