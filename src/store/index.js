import { defineStore } from "pinia";

export const useAudioStore = defineStore("audio", {
	state: () => ({
		text: "",
		volume: "",
	}),
	actions: {
		updateVolume(newVolume) {
			this.volume = newVolume;
			const audio = document.getElementById("audio-tag");
			audio.volume = this.volume;
		},
	},
	getters: {
		// You can add getters here if needed
	},
});
