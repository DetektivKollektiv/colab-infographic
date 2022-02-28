<script setup>
import stories from '@/api/stories.json'
import { useInfographicStore } from '@/stores/infographic'
import Team from './components/Team.vue';

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
    <Trends id="trendSection"/>

    <div class="my-24 hidden xl:block">
        <Infographic />
    </div>
    <InfographicMobile class="xl:hidden" />
    <Publication />
    <Team />
</template>
