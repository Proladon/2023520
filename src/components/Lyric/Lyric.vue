<template>
  <div class="lyric">
    <div class="lyrics-wrapper">
      <div class="lyric-position" v-for="lyric in lyrics" :key="lyric.text">
        <LyricItem :item="lyric" :curTime="rawTime" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import lyrics from '@/assets/lyrics'
import LyricItem from './LyricItem.vue'
import { usePlayerStore } from '@/stores/player'
import { computed, ref, watch, toRef } from 'vue'
import { get } from 'lodash-es'

const { player } = usePlayerStore()

const curTime = computed(() => player.currentTime)
const rawTime = computed(() => player.rawTime)

const curLyric = ref('')
const change = ref(false)

watch(curTime, () => {
  getLyric()
})

const getLyric = () => {
  if (!player.currentTime) return
  const text = get(lyrics, player.currentTime)
  if (text) {
    curLyric.value = text
    change.value = true
    return
  }
  setTimeout(() => {
    change.value = false
  }, 500)
}

defineProps<{
  curTime: string
}>()
</script>

<style scoped lang="postcss">
.lyric {
  @apply text-white;
  @apply flex flex-col justify-center items-center;
}

.lyrics-wrapper {
  @apply relative w-full;
}

.lyric-position {
  @apply absolute top-0 bottom-0 left-0 right-0 m-auto;
}
</style>
