<script setup>
import Intro_section_arrows from './Intro_section_arrows.vue';
import Intro_section_slide from './Intro_section_slide.vue';
</script>

<script>
export default {
  data() {
    return {
      slide: 1
    }
  },
  methods: {
    method_slide(input) {
      this.slide = this.slide + input;
      console.log(this.slide)
    }
  }
}
</script>


<template>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css"
    rel="stylesheet"
    type="text/css"
  />
  <!-- <transition-group name="fade"> -->
  <div>
    <transition-group
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__slideOutRight"
    >
      <!-- <h1>Intro-Section: Currently showing slide {{ this.slide }}</h1> -->
      <Intro_section_slide key="Slide1" text="Hallo" color="bg-red-200" v-if="slide == 1"></Intro_section_slide>
      <Intro_section_slide key="Slide2" text="Das" color="bg-blue-200" v-if="slide == 2"></Intro_section_slide>
      <Intro_section_slide key="Slide3" text="ist" color="bg-green-200" v-if="slide == 3"></Intro_section_slide>
      <Intro_section_slide key="Slide4" text="ein" color="bg-yellow-200" v-if="slide == 4"></Intro_section_slide>
      <Intro_section_slide key="Slide5" text="Slider" color="bg-purple-200" v-if="slide == 5"></Intro_section_slide>
    </transition-group>
    <Intro_section_arrows @change_slide="method_slide"></Intro_section_arrows>
  </div>
</template>

