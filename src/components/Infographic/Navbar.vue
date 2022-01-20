<template>
    <div class="relative">
        <div class="flex space-x-4 justify-center float-left">
            <ButtonStory
                v-for="story in stories"
                :story="story.title"
                :key="story.title"
            ></ButtonStory>
        </div>

        <ButtonDropdown
            class="absolute right-0 z-10"
            :options="options"
            @option="infographicStore.setMassnahme"
        ></ButtonDropdown>
    </div>
</template>
<script setup>
import stories from '@/api/stories.json'
import { useInfographicStore } from '@/stores/infographic'

const infographicStore = useInfographicStore()

const options = [
    {
        text: 'Forschen & entwickeln',
        icon: 'fas fa-atom',
        color: 'text-red-500',
    },
    {
        text: 'Experimentieren & messen',
        icon: 'fas fa-microscope',
        color: 'text-black',
    },
    {
        text: 'Aufdecken & verteidigen',
        icon: 'fas fa-search',
        color: 'text-yellow-500',
    },
    {
        text: 'Platzieren & antreiben',
        icon: 'fas fa-map-marker-alt',
        color: 'text-blue-500',
    },
    {
        text: 'Demonstrieren & aktivieren',
        icon: 'fas fa-toggle-on',
        color: 'text-blue-light-500',
    },
]
</script>
<style></style>
