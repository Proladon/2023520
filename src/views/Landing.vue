<template>
  <div class="landing">
    <header>
      <div class="hint-img" v-if="step === 1">
        <Icon color="grey" size="40">
          <Headphones28Filled />
        </Icon>
        /
        <Icon color="grey" size="40">
          <Speaker220Filled />
        </Icon>
      </div>
    </header>

    <main v-html="messages[step]"></main>

    <footer class="flex gap-[20px]">
      <button @click="handlePre">Pre</button>
      <button @click="handleNext">Next</button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@vicons/utils'
import { Headphones28Filled, Speaker220Filled } from '@vicons/fluent'
import anime from 'animejs'
const emits = defineEmits(['confirm', 'close'])

const step = ref<number>(0)
const fading = ref<boolean>(false)
const messages: string[] = [
  `
  Hey ! Today is 520 ❤<br>
  And just a song I wanna give you <br>
  o((>ω< ))o
  `,
  `So make sure you put on earphones or open the speaker<br>
  (๑•̀ㅂ•́)و✧`,
  `Ready ?`
]

const fadeout = () => {
  fading.value = true
  const res = anime({
    targets: ['.landing'],
    opacity: 0,
    duration: 5500,
    easing: 'easeInOutQuad'
  })
  res.finished.then(() => emits('close'))
}
const handlePre = () => {
  if (fading.value) return
  if (!step.value) return
  step.value -= 1
}
const handleNext = () => {
  if (fading.value) return
  if (step.value === 2) {
    fadeout()
    setTimeout(() => {
      emits('confirm')
    }, 1000)

    return
  }
  step.value += 1
}
</script>

<style scoped lang="postcss">
.landing {
  @apply w-full h-full px-[40px] text-[gray] text-[18px] leading-[36px];
  @apply flex flex-col items-center justify-center gap-[30px];
  @apply fixed top-0 bottom-0 left-0 right-0 m-auto;
  @apply z-20;
  @apply bg-gray-700;
}

.hint-img {
  @apply text-[20px] text-[gray];
  @apply flex items-center justify-center gap-[15px];
}

.landing main {
  @apply text-center;
}
</style>
