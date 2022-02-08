<script setup>
import stories from '@/api/stories.json'
import { useInfographicStore } from '@/stores/infographic'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const infographicStore = useInfographicStore()

const activeStory = ref(0)
</script>

<template>
    <Modal v-if="infographicStore.showModal"></Modal>

    <IntroSection></IntroSection>
    <div @click.prevent="storyActive = true"></div>
    <div
        v-for="(story, i) in stories"
        :key="story.title"
        @click="activeStory = i"
        :class="{ 'cursor-pointer': activeStory !== i }"
    >
        <Story :story="story" :active="i == activeStory" />
    </div>
    <Trends />

    <div class="my-24 hidden lg:block">
        <Infographic />
    </div>
    <InfographicMobile class="lg:hidden" />
    <Publication />
</template>
