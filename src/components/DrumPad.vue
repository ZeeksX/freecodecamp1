<template>
    <div id="drum-letter" @click="playSound" :class="{ disabled: !audioStore.powerSwitch }">
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
    methods: {
        playSound() {
            const audioElement = this.$refs.audio;
            this.audioStore.text = this.pad.name;
            const volume = this.audioStore.volume;
            if (volume !== 0) {
                audioElement.volume = volume;
                audioElement.play();
            }
        }
    },
    created() {
        if (!this.audioStore.volume) {
            this.audioStore.volume = 0.5;
        }
    },
    computed: {
        audioStore() {
            return useAudioStore();
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
