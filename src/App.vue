<script setup>
import { ref } from 'vue'

import stories from '@/api/stories.json'
// import IntroSection from './components/Intro/IntroSection.vue'

const activeStory = ref(0)
</script>

<template>
    <IntroSection></IntroSection>
    <Story :story="stories[0]" :active="true"></Story>
    <div @click.prevent="storyActive = true"></div>
    <div
        v-for="(story, i) in stories"
        :key="story.title"
        @click="activeStory = i"
        :class="{ 'cursor-pointer': activeStory !== i }"
    >
        <Story :story="story" :active="i == activeStory"></Story>
    </div>
    <Trends></Trends>
</template>

<style></style>
