<script setup>
import { ref } from 'vue'
import Section from './components/Intro/Section.vue'
import TrendsSection from './components/TrendsSection/TrendsSection.vue'
import Infographic from './components/Infographic/Infographic.vue'
import Story from './components/Story/Story.vue'

import stories from '@/api/stories.json'

const storyActive = ref(false)
</script>

<template>
    <!--     <div class="relative min-h-screen">
        <Section></Section>
    </div>
    <Intro_section></Intro_section> -->
    <Story :story="stories[0]" :active="true"></Story>
    <div @click.prevent="storyActive = true"></div>
    <!--     <trends-section></trends-section>

    <Infographic /> -->
</template>

<style></style>
