<template>
    <div v-for="pad in drumData" :key="pad.letter" class="drum-pad">
        <DrumPad :pad="pad"/>
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
    background-color: aqua;
}
</style>