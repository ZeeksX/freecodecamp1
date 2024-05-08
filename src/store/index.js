import { defineStore } from "pinia";
import data from "@/assets/data.json"
export const useAudioStore = defineStore("audio", {
	state: () => ({
		text: "",
		volume: "",
    powerSwitch: false,
    drumData: data.data,
    changeKit: false
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
