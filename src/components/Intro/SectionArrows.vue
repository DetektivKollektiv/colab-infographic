<script>
export default {
  props: ['current_slide'],
  emits: ["change_slide"],
  methods: {
    goToNextSlide() {
      console.log('Trying next slide');
      console.log(this.current_slide);
      let target = this.current_slide + 1;
      if (target == 7) {
        target = 1
      }
      this.$emit("change_slide", { 'target': target, 'animationUp': true })
    },
    goToPrevSlide() {
      console.log('Trying prev slide');
      console.log(this.current_slide);
      let target = this.current_slide - 1;
      if (target == 0) {
        target = 6
      }
      this.$emit("change_slide", { 'target': target, 'animationUp': false })
    },
    goToSlide(target) {
      let animationUp = target < this.current_slide ? false : true
      this.$emit("change_slide", { 'target': target, 'animationUp': animationUp })
    }

  }
}
</script>

<template>
  <div class="flex flex-row items-center gap-6 text-2xl">
    <button v-on:click="goToPrevSlide" class="text-red-500">
      <i class="fas fa-caret-left"></i>
    </button>
    <button
      v-on:click="goToSlide(1)"
      v-bind:class="[current_slide == 1 ? 'highlight' : '']"
      class="w-4 h-4 border-2 rounded-full border-red-500"
    >
    </button>
    <button
      v-on:click="goToSlide(2)"
      v-bind:class="[current_slide == 2 ? 'highlight' : '']"
      class="w-4 h-4 border-2 rounded-full border-red-500"
    >
    </button>
    <button
      v-on:click="goToSlide(3)"
      v-bind:class="[current_slide == 3 ? 'highlight' : '']"
      class="w-4 h-4 border-2 rounded-full border-red-500"
    >
    </button>
    <button
      v-on:click="goToSlide(4)"
      v-bind:class="[current_slide == 4 ? 'highlight' : '']"
      class="w-4 h-4 border-2 rounded-full border-red-500"
    >
    </button>
    <button
      v-on:click="goToSlide(5)"
      v-bind:class="[current_slide == 5 ? 'highlight' : '']"
      class="w-4 h-4 border-2 rounded-full border-red-500"
    >
    </button>
    <button
      v-on:click="goToSlide(6)"
      v-bind:class="[current_slide == 6 ? 'highlight' : '']"
      class="w-4 h-4 border-2 rounded-full border-red-500"
    >
    </button>
    <button v-on:click="goToNextSlide" class="text-red-500">
      <i class="fas fa-caret-right"></i>
    </button>
  </div>
</template>

<style scoped>
.highlight {
  @apply bg-red-500
}
</style>
