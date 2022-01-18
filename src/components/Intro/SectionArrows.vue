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
  <div class="absolute top-0 right-0 flex flex-row text-4xl pt-8 pr-6">
    <button
      v-on:click="goToPrevSlide"
      class="text-purple-600 p-2 m-1 flex items-center justify-center"
      v-bind:class="[current_slide == 1 ? 'text-purple-600' : 'text-gray-600']"
    >
      <i class="fas fa-arrow-circle-left"></i>
    </button>
    <button
      v-on:click="goToNextSlide"
      class="text-purple-600 p-2 m-1 flex items-center justify-center"
      v-bind:class="[current_slide == 1 ? 'text-purple-600' : 'text-gray-600']"
    >
      <i class="fas fa-arrow-circle-right"></i>
    </button>
  </div>
  <div
    class="absolute bottom-0 left-0 pb-8 pl-8 flex flew-row gap-4 text-2xl"
    v-bind:class="[current_slide == 1 ? 'text-purple-600' : 'text-gray-600']"
  >
    <button v-on:click="goToSlide(1)" v-bind:class="[current_slide == 1 ? 'underline' : '']">
      <p>1</p>
    </button>
    <button v-on:click="goToSlide(2)" v-bind:class="[current_slide == 2 ? 'underline' : '']">
      <p>2</p>
    </button>
    <button v-on:click="goToSlide(3)" v-bind:class="[current_slide == 3 ? 'underline' : '']">
      <p>3</p>
    </button>
    <button v-on:click="goToSlide(4)" v-bind:class="[current_slide == 4 ? 'underline' : '']">
      <p>4</p>
    </button>
    <button v-on:click="goToSlide(5)" v-bind:class="[current_slide == 5 ? 'underline' : '']">
      <p>5</p>
    </button>
    <button v-on:click="goToSlide(6)" v-bind:class="[current_slide == 6 ? 'underline' : '']">
      <p>6</p>
    </button>
  </div>
</template>

<style scoped>
</style>
