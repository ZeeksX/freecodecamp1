import { defineStore } from "pinia";

export const useAudioStore = defineStore("audio", {
  state: () => ({
    text: "",
    volume: 0.5, // Initial volume set to 50%
  }),
  actions: {
    updateVolume(newVolume) {
      this.volume = newVolume;
      const audio = document.getElementById("audio-tag");
      if (audio) {
        audio.volume = this.volume;
      } else {
        console.warn("Audio element not found");
      }
      this.text = "Volume: " + Math.round(this.volume * 100);
    },
  },
  getters: {
    // You can add getters here if needed
  },
});
