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
    <div class="relative min-h-screen">
        <Section></Section>
    </div>
    <Intro_section></Intro_section>
    <trends-section></trends-section>
    <div @click.prevent="storyActive = true">
        <Story :story="stories[0]" :active="storyActive"></Story>
    </div>
    <Infographic />
</template>

<style></style>
