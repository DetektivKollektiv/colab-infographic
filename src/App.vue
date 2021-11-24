<script setup>
import { defineComponent } from '@vue/runtime-core'

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Intro_section from './components/Intro_section.vue'
import { Infographic } from './components/Infographic'

const infograpic = defineComponent(Infographic)
</script>

<template>
    <!-- <Intro_section class="h-screen w-screen"></Intro_section> -->
    <component :is="infograpic"></component>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* overflow: hidden; */
}
::-webkit-scrollbar {
    display: none;
}
</style>
