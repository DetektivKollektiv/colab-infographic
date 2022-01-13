<script setup>
import { ref } from 'vue'
import TrendsSection from './components/TrendsSection/TrendsSection.vue'
import Infographic from './components/Infographic/Infographic.vue'
import Story from './components/Story/Story.vue'

import stories from '@/api/stories.json'
import IntroSection from './components/Intro/IntroSection.vue'

const storyActive = ref(false)
</script>

<template>
    <IntroSection></IntroSection>
    <Story :story="stories[0]" :active="true"></Story>
    <div @click.prevent="storyActive = true"></div>
    <!--     <trends-section></trends-section>

    <Infographic />-->
</template>

<style></style>
