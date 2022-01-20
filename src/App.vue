<script setup>
import stories from '@/api/stories.json'

const activeStory = ref(0)
</script>

<template>
    <!-- <Intro_section></Intro_section> -->
    <!-- <div
        v-for="(story, i) in stories"
        :key="story.title"
        @click="activeStory = i"
        :class="{ 'cursor-pointer': activeStory !== i }"
    >
        <Story :story="story" :active="i == activeStory" />
    </div>
    <Trends /> -->

    <div class="hidden lg:block my-24">
        <Infographic />
    </div>
    <InfographicMobile class="lg:hidden" />
    <Publication />
</template>

<style></style>
