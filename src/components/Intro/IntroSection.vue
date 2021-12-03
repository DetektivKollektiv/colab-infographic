<script setup>
import IntroSectionSlide from './IntroSectionSlide.vue'
import IntroSectionArrows from './IntroSectionArrows.vue'
</script>

<script>
export default {
    data() {
        return {
            slide: 1,
        }
    },
    methods: {
        method_slide(input) {
            this.slide = this.slide + input
            console.log(this.slide)
        },
    },
}
</script>

<template>
    <link
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css"
        rel="stylesheet"
        type="text/css"
    />
    <!-- <transition-group name="fade"> -->
    <transition-group
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__slideInLeft"
        leave-active-class="animate__animated animate__slideOutRight"
    >
        <!-- <h1>Intro-Section: Currently showing slide {{ this.slide }}</h1> -->
        <IntroSectionSlide
            key="Slide1"
            text="Hallo"
            color="bg-red-200"
            v-if="slide == 1"
        ></IntroSectionSlide>
        <IntroSectionSlide
            key="Slide2"
            text="Das"
            color="bg-blue-200"
            v-if="slide == 2"
        ></IntroSectionSlide>
        <IntroSectionSlide
            key="Slide3"
            text="ist"
            color="bg-green-200"
            v-if="slide == 3"
        ></IntroSectionSlide>
        <IntroSectionSlide
            key="Slide4"
            text="ein"
            color="bg-yellow-200"
            v-if="slide == 4"
        ></IntroSectionSlide>
        <IntroSectionSlide
            key="Slide5"
            text="Slider"
            color="bg-purple-200"
            v-if="slide == 5"
        ></IntroSectionSlide>
    </transition-group>

    <IntroSectionArrows @change_slide="mShod_slAe"></IntroSectionArrows>
</template>

<style scoped>
.fade-enter-active {
}
.fade-leave-active {
    /* transition: opacity 0.5s ease; */
}

.fade-enter-from {
    transition: transform 1s;
    transition-delay: 1s;
    transform: translateX(100px);
}
.fade-leave-to {
    transition: transform 1s;
    transform: translateX(100vw);
}
</style>
