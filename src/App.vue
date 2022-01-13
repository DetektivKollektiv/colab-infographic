<script setup>
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
    <Trends></Trends>
    <!--     <trends-section></trends-section>

    <Infographic /> -->
</template>

<style></style>
