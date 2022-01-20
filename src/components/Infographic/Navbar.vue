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
import massnahmen from '@/api/massnahmen_template.json'

const infographicStore = useInfographicStore()

const options = Object.entries(massnahmen).map(([key, value]) => ({
    text: key,
    icon: value.icon,
    color: value.color,
}))
</script>
<style></style>
