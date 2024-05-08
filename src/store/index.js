import { defineStore } from "pinia";

export const useAudioStore = defineStore("audio", {
	state: () => ({
		text: "",
	}),
	getters: {
		updateVolume(event) {
			this.text = "Volume: " + event.target.value;
		},
	},
	actions: {},
});
