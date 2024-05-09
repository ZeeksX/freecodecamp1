import { defineStore } from "pinia";
import data from "@/assets/data.json";

export const useAudioStore = defineStore("audio", {
	state: () => ({
		text: "",
		volume: "",
		drumData: data.data,
		powerSwitch: false,
		changeKit: false,
	}),
	actions: {
		updateVolume(newVolume) {
			this.volume = newVolume;
			const audio = document.getElementById("audio-tag");
			audio.volume = this.volume;
		},
		updateKit() {
			this.drumData = this.changeKit ? data.chord : data.data;
		},
	},
	getters: {},
});
