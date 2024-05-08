<template>
  <div class="home-page">
    <DrumPage />
    <DrumControls />
  </div>
</template>

<script>
import DrumPage from "@/components/DrumPage.vue";
import DrumControls from "@/components/DrumControls.vue";
export default {
  name: "HomePage",
  components: {
    DrumPage,
    DrumControls
  },
};
</script>
<style>
.home-page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}
</style>