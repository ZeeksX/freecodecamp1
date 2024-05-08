<template>
    <div class="drum-controls">
        <h3>Power</h3>
        <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>
        </label>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #0000FF;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #000000;
}

input:focus+.slider {
    box-shadow: 0 0 1px #000000;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}
</style>