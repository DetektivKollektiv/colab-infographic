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
  <div class="flex flex-row content-center gap-6 text-2xl">
    <button
      class="text-red-500"
      v-on:click="goToPrevSlide"
      :class="current_slide == 1 ? 'invisible' : ''"
    >
      <i class="fas fa-caret-left"></i>
    </button>
    <button v-on:click="goToSlide(1)" v-bind:class="[current_slide == 1 ? 'highlight' : '']">
      <p>1</p>
    </button>
    <button v-on:click="goToSlide(2)" v-bind:class="[current_slide == 2 ? 'highlight' : '']">
      <p>2</p>
    </button>
    <button v-on:click="goToSlide(3)" v-bind:class="[current_slide == 3 ? 'highlight' : '']">
      <p>3</p>
    </button>
    <button v-on:click="goToSlide(4)" v-bind:class="[current_slide == 4 ? 'highlight' : '']">
      <p>4</p>
    </button>
    <button v-on:click="goToSlide(5)" v-bind:class="[current_slide == 5 ? 'highlight' : '']">
      <p>5</p>
    </button>
    <button v-on:click="goToSlide(6)" v-bind:class="[current_slide == 6 ? 'highlight' : '']">
      <p>6</p>
    </button>
    <button
      class="text-red-500"
      v-on:click="goToNextSlide"
      :class="current_slide == 6 ? 'invisible' : ''"
    >
      <i class="fas fa-caret-right"></i>
    </button>
  </div>
</template>

<style scoped>
.highlight {
  @apply text-red-500 text-4xl font-bold;
}
</style>
