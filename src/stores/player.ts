import { computed, reactive, ref } from 'vue'
import crushOnYou from '@/assets/finding_hope-crush_on_you_cut.mp3'

export type LyricItem = {
  text: string
  from: number
  to: number
}

export interface Player {
  audio: HTMLAudioElement | null
  // circleLeft: number | null,
  barWidth: number
  duration: string | null
  currentTime: string | null
  rawTime: number
  isTimerPlaying: boolean
  currentTrack: Track | null
  currentTrackIndex: number
  transitionName: string | null
  playerProgressBar: any
}

export type Track = {
  name: string
  artist: string
  cover: string
  source: string
  url: string
}
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const player = reactive<Player>({
    audio: null,
    // circleLeft: null,
    barWidth: 0,
    duration: null,
    currentTime: null,
    rawTime: 0,
    isTimerPlaying: false,
    currentTrack: null,
    currentTrackIndex: 0,
    transitionName: null,
    playerProgressBar: null
  })
  // const playerProgressBar = ref(null)

  const tracks: Track[] = [
    {
      name: 'Crush On You',
      artist: 'Sia',
      cover: 'https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg',
      source: crushOnYou,
      url: 'https://www.youtube.com/watch?v=kYgGwWYOd9Y'
    }
  ]

  const nextTrack = () => {}

  const initPlayer = () => {
    player.currentTrack = tracks[0]
    player.audio = new Audio()
    player.audio.src = player.currentTrack.source
    player.audio.ontimeupdate = function () {
      generateTime()
    }
    player.audio.onloadedmetadata = function () {
      generateTime()
    }
    player.audio.onended = function () {
      nextTrack()
      player.isTimerPlaying = true
    }
  }

  const generateTime = () => {
    if (!player.audio) return
    const width = (100 / player.audio.duration) * player.audio.currentTime
    player.barWidth = width
    // player.circleLeft = width + '%'
    let durmin = Math.floor(player.audio.duration / 60).toString()
    let dursec = Math.floor(player.audio.duration - Number(durmin) * 60).toString()

    let curmin = Math.floor(player.audio.currentTime / 60).toString()
    let cursec = Math.floor(player.audio.currentTime - Number(curmin) * 60).toString()
    player.rawTime = player.audio.currentTime
    // let cursec = (player.audio.currentTime - Number(curmin) * 60).toString()
    if (Number(durmin) < 10) {
      durmin = '0' + durmin
    }
    if (Number(dursec) < 10) {
      dursec = '0' + dursec
    }
    if (Number(curmin) < 10) {
      curmin = '0' + curmin
    }
    if (Number(cursec) < 10) {
      cursec = '0' + cursec
    }
    player.duration = durmin + ':' + dursec
    player.currentTime = curmin + ':' + cursec
  }

  const updateBar = (x: number) => {
    if (!player.audio) return
    const progress = player.playerProgressBar
    const maxduration = player.audio.duration
    const position = x - progress.offsetLeft
    let percentage = (100 * position) / progress.offsetWidth
    if (percentage > 100) {
      percentage = 100
    }
    if (percentage < 0) {
      percentage = 0
    }
    player.barWidth = percentage
    // player.circleLeft = percentage + "%";
    player.audio.currentTime = (maxduration * percentage) / 100
    player.audio.play()
  }

  const clickProgress = (e: any) => {
    if (!player.audio) return
    player.isTimerPlaying = true
    player.audio.pause()
    updateBar(e.layerX)
  }

  const play = (): void => {
    if (!player.audio) return
    if (player.audio.paused) {
      player.audio.play()
      player.isTimerPlaying = true
    } else {
      player.audio.pause()
      player.isTimerPlaying = false
    }
  }

  return {
    player,
    initPlayer,
    play,
    generateTime,
    updateBar,
    clickProgress
    // playerProgressBar
  }
})
