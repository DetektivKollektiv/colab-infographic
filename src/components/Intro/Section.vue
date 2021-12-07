<script setup>
import SectionSlide from './SectionSlide.vue'
import SectionArrows from './SectionArrows.vue'
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
    <transition-group
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__slideInLeft"
        leave-active-class="animate__animated animate__slideOutRight"
    >
        <div v-if="slide == 1" class="w-screen h-screen text-white">
            <div
                class="w-full h-full bg-center"
                style="background-image: url('src/assets/pictures/unsplash_RmoWqDCqN2E.png')"
            >
                <div class="h-full w-full sm:w-2/3 flex flex-col justify-center px-8">
                    <h2 class="text-3xl">Lorem ipsum dolor sit</h2>
                    <h1 class="text-purple-700 text-5xl font-bold pt-4 pb-8">Über dieses Projekt</h1>
                    <p>Wir haben lorem ipsum dorlor sit der Prozess wird als Wertschöpfungskette dargestellt lorem ipsum</p>
                </div>
            </div>
        </div>
        <div v-if="slide == 2" class="w-screen h-screen flex flex-col sm:flex-row">
            <div class="flex flex-col sm:w-1/2 pt-10 pl-8">
                <h3 class="text-2xl">Lorem ipsum dolor sit</h3>
                <h2 class="text-3xl pt-4 pb-4 sm:pb-20">Über dieses Projekt</h2>
                <p class="sm:w-2/3">Die Kette ist der Kern, darum Mesotrends und Makrotrends lorem ipsum</p>
            </div>
            <div class="sm:w-1/2 h-full p-10 flex items-center justify-center">
                <img class="max-w-full max-h-full" src="src/assets/pictures/Overview.svg">
            </div>
            
        </div>
        <div v-if="slide == 3" class="slide-container">3</div>
        <div v-if="slide == 4" class="slide-container">4</div>
        <div v-if="slide == 5" class="slide-container">5</div>
    </transition-group>

    <SectionArrows @change_slide="method_slide"></SectionArrows>
</template>

<style scoped>
</style>
