<template>
    <div class="relative">
        <div class="float-left flex justify-center space-x-2">
            <ButtonStory
                v-for="story in stories"
                :story="story.title"
                :key="story.title"
            ></ButtonStory>
        </div>

        <ButtonDropdown
            class="absolute right-0 z-10"
            text="Lösungs-Ansätze"
            :options="options"
            :activeOption="activeOption"
            @option="setMassnahme"
        ></ButtonDropdown>
    </div>
</template>
<script setup>
import stories from '@/api/stories.json'
import { useInfographicStore } from '@/stores/infographic'
import { options } from '@/api/massnahmen.js'

const infographicStore = useInfographicStore()

const activeOption = computed(() => {
    return options.find((option) => option.text === infographicStore.massnahme)
})

function setMassnahme(massnahme) {
    if (massnahme !== infographicStore.massnahme) {
        infographicStore.setMassnahme(massnahme)
    } else {
        infographicStore.setMassnahme('')
    }
}
</script>
<style></style>
