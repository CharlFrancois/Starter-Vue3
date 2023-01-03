<template>
  <div class="first-section">
    <img src="@/assets/KaraokeBackground.jpg" class="background" />
  </div>
</template>

<script>
export default {
  name: "FirstSection"
}
</script>

<style lang="scss" scoped>
.first-section {
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  .background {
    object-fit: cover;
    height: 100%;
  }
}
</style>