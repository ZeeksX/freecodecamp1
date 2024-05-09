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
.container {
  outline: 5px solid orange;
  width: 41.25rem;
  text-align: center;
  background-color: #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>
