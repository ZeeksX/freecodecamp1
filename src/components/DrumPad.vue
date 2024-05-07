<template>
    <div>
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