<template>
  <div class="lyric">
    <p>{{ curTime }}</p>
    <br />
    <p :class="{ 'fade-in': change, fadeout: !change }">{{ curLyric }}</p>
  </div>
</template>

<script setup lang="ts">
import lyric from '@/assets/lyric'
import { usePlayerStore } from '@/stores/player'
import { computed, ref, watch, toRef } from 'vue'
import { get } from 'lodash-es'

const { player } = usePlayerStore()

const curTime = computed(() => player.currentTime)

const curLyric = ref('')
const change = ref(false)

watch(curTime, () => {
  getLyric()
})

const getLyric = () => {
  if (!player.currentTime) return
  const text = get(lyric, player.currentTime)
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

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
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
    opacity: 00;
    transform: translateY(10px);
  }
}
</style>
