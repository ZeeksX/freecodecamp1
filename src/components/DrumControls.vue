<template>
  <div class="drum-controls">
    <div class="power">
      <span>Power</span>
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
    </div>
    <p id="details">{{ audioStore.text }}</p>
    <div class="volume-slider">
      <input type="range" min="0" max="1" step="0.01" v-model="audioStore.volume" @input="updateVolume" />
    </div>
    <div class="bank">
      <span>Bank</span>
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script>
import { useAudioStore } from '@/store';

export default {
  data() {
    return {
      audioStore: useAudioStore(),
    };
  },
  methods: {
    updateVolume(event) {
      this.audioStore.volume = event.target.value;
      this.audioStore.text = "Volume: " + Math.round(event.target.value * 100);
      setTimeout(() => {
        this.audioStore.text = "";
      }, 1000);
    }

  }
}
</script>

<style>
.power,
.bank {
  display: flex;
  flex-direction: column;
}

.bank {
  margin-top: 0.95rem;
}
</style>
