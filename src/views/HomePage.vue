<template>
  <div class="home-page">
    <DrumPage />
  </div>
</template>

<script>
import DrumPage from "@/components/DrumPage.vue";
export default {
  name: "HomePage",
  components: {
    DrumPage,

  },
};
</script>
<style>
.home-page {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  flex-direction: row;
}
</style>
