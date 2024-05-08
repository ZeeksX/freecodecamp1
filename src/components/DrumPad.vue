<template>
    <div id="drum-letter" @click="playSound">
        <p> {{ pad.letter }}</p>
        <audio ref="audio" :src="pad.link"></audio>
    </div>
</template>
<script>
export default {
    name: "DrumPad",
    props: {
        pad: Object
    },
    methods: {
        playSound() {
            const audioElement = this.$refs.audio;
            audioElement.play();
        }
    }
}
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
