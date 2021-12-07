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
  <div class="absolute top-0 right-0 flex flex-row text-xs pt-8 pr-6">
    <button v-on:click="goToPrevSlide" class="bg-purple-700 h-5 w-5 rounded-full text-black p-2 m-1 flex items-center justify-center">
      <i class="fas fa-arrow-left"></i>
    </button>
    <button v-on:click="goToNextSlide" class="bg-purple-700 h-5 w-5 rounded-full text-black p-2 m-1 flex items-center justify-center">
      <i class="fas fa-arrow-right"></i>
    </button>
  </div>
</template>

<style scoped>
</style>
