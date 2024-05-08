<template>
  <div class="container">
    <HomePage />
  </div>
</template>

<script>
import HomePage from "@/views/HomePage.vue"
export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>
<style>
body {
  background-color: #8D8D8D;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  outline: 5px solid orange;
  width: 660px;
  text-align: center;
  background-color: #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
