<template>
    <div class="homepage-one">
        <div v-for="pad in drumData" :key="pad.letter" class="drum-pad">
            <DrumPad :pad="pad" />
        </div>
    </div>

</template>
<script>

import DrumPad from "@/components/DrumPad.vue"
import { useAudioStore } from "@/store";
export default {
    name: "DrumPage",
    components: {
        DrumPad
    },
     computed: {
        drumData() {
            return useAudioStore().drumData;
        }
    }

}
</script>
<style>
.drum-pad {
    background-color: #808080;
    width: 6.25rem;
    height: 5rem;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    box-shadow: black 3px 3px 5px;
}
.homepage-one {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex-direction: row;
  width: 60%;
}
</style>