<script setup>
import Section from './components/Intro/Section.vue'
import TrendsSection from './components/TrendsSection/TrendsSection.vue'
import Infographic from './components/Infographic/Infographic.vue'
import Story from './components/Story/Story.vue'

import stories from '@/api/stories.json'
</script>

<template>
    <!-- <div class="relative min-h-screen">
        <Section></Section>
    </div>
          <Intro_section></Intro_section>
          <trends-section></trends-section> -->
    <Story :story="stories[0]"></Story>
    <!-- <Infographic /> -->
</template>

<style></style>
