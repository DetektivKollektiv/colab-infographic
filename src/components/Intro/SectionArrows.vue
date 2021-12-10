<script>
export default {
  props: ['current_slide'],
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
    <button
      v-on:click="goToPrevSlide"
      class="text-purple-600 text-2xl p-2 m-1 flex items-center justify-center"
    >
    <!-- v-bind:class="[(current_slide==1) ? text-purple-600 : text-gray-600]" -->

      <i class="fas fa-arrow-circle-left"></i>
    </button>
    <button
      v-on:click="goToNextSlide"
      class="text-purple-600 text-2xl p-2 m-1 flex items-center justify-center"
    >
      <i class="fas fa-arrow-circle-right"></i>
    </button>
  </div>
</template>

<style scoped>
</style>
