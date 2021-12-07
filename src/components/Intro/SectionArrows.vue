<script>
export default {
  emits: ["change_slide"],
  methods: {
    goToNextSlide() {
      console.log('Trying next slide');
      this.$emit("change_slide", 1)
    },
    goToPrevSlide() {
      console.log('Trying prev slide');
      this.$emit("change_slide", -1)
    }
  }
}
</script>

<template>
  <div class="absolute top-0 right-0">
    <button v-on:click="goToPrevSlide" class="border bg-white m-3">zurück</button>
    <button v-on:click="goToNextSlide" class="border bg-white m-3">weiter</button>
  </div>
</template>

<style scoped>
</style>
