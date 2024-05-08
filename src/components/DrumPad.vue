<template>
  <div id="drum-letter" @click="playSound">
    <p>{{ pad.letter }}</p>
    <audio ref="audio" :src="pad.link" id="audio-tag"></audio>
  </div>
</template>

<script>
import { useAudioStore } from '@/store';

export default {
  name: "DrumPad",
  props: {
    pad: Object
  },
  data() {
    return {
        audioStore: useAudioStore()
    }
  },
  methods: {
    playSound() {
      const audioElement = this.$refs.audio;
      const volume = this.audioStore.volume;
      if (volume !== 0) {
        this.audioStore.updateVolume(volume);
        audioElement.play();
      }
    }
  }
};
</script>

<style>
p {
  font-weight: 900;
  margin: 0;
}
#drum-letter {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
}
</style>

