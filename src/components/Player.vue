<template>
  <div class="player">
    <div class="progress" ref="playerProgressBar">
      <div class="album-info" v-if="player.currentTrack">
        <!-- <div class="track-name">{{ player.currentTrack.name }}</div> -->
      </div>
      <div class="progress__bar" @click="clickProgress">
        <div class="progress__current" :style="{ width: `${player.barWidth}%` }"></div>
      </div>

      <button ref="playBtn" @click="play">play</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayer } from '@/use/player'
import { onMounted, ref } from 'vue'

const { player, initPlayer, clickProgress, playerProgressBar, play } = usePlayer()
const playBtn = ref()
onMounted(() => {
  initPlayer()
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
