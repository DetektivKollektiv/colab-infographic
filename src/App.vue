<script setup>
import { ref } from 'vue'
import Section from './components/Intro/Section.vue'
import TrendsSection from './components/TrendsSection/TrendsSection.vue'
import Infographic from './components/Infographic/Infographic.vue'
import Story from './components/Story/Story.vue'

import stories from '@/api/stories.json'

const activeStory = ref(0)
</script>

<template>
    <!-- <div class="relative min-h-screen">
        <Section></Section>
    </div>
    <Intro_section></Intro_section> -->
    <div
        v-for="(story, i) in stories"
        :key="story.title"
        @click="activeStory = i"
        :class="{ 'cursor-pointer': activeStory !== i }"
    >
        <Story :story="story" :active="i == activeStory"></Story>
    </div>
    <!--     <trends-section></trends-section>

    <Infographic /> -->
</template>

<style></style>
