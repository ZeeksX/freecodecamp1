<template>
    <div id="drum-letter">
        <p> {{ pad.letter }}</p>
    </div>
</template>
<script>
export default {
    name: "DrumPad",
    props: {
        pad: Object
    }
}
</script>
<style>
p{
    font-weight: 900;
}
#drum-letter{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>