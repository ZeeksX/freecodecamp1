<template>
    <div v-for="pad in drumData" :key="pad.letter" class="drum-pad">
        <DrumPad :pad="pad" />
    </div>
</template>
<script>
import data from "@/assets/data.json"
import DrumPad from "@/components/DrumPad.vue"
export default {
    name: "DrumPage",
    data() {
        return {
            drumData: data.data
        }
    },
    components: {
        DrumPad
    }
}
</script>
<style>
.drum-pad {
    background-color: #808080;
    width: 100px;
    height: 80px;
    margin-right: 10px;
    border-radius: 5px;
    padding-top: 35px;
    box-sizing: border-box;
    cursor: pointer;
    box-shadow: black 3px 3px 5px;
}
</style>