<template>
  <n-modal v-model:show="showModal">
    <n-button @click="onPlay">Play</n-button>
  </n-modal>
</template>

<script setup lang="ts">
import { NModal, NButton } from 'naive-ui'
import { useVModel } from '@vueuse/core'
import { usePlayerStore } from '@/stores/player'

const props = defineProps<{ show: boolean }>()
const emits = defineEmits(['update:show'])

const { play } = usePlayerStore()

const showModal = useVModel(props, 'show', emits)

const onPlay = () => {
  showModal.value = false
  play()
}
</script>

<style scoped lang="postcss"></style>
