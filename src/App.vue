<script setup>
import stories from '@/api/stories.json'
import { useInfographicStore } from '@/stores/infographic'

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

    <div class="hidden lg:block my-24">
        <Infographic />
    </div>
    <InfographicMobile class="lg:hidden" />
    <Publication />
</template>
