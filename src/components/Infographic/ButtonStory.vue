<template>
    <ButtonText :active="active" @click="setStory">{{ story }}</ButtonText>
</template>

<script setup>
import { useInfographicStore } from '@/stores/infographic'

const props = defineProps({
    story: {
        type: String,
        required: true,
    },
})

const { story } = toRefs(props)

const storyFormat = computed(() => {
    return story.value.replace(/\s/g, '-').toLowerCase()
})

const active = computed(() => {
    return useInfographicStore().story === storyFormat.value
})

function setStory() {
    useInfographicStore().setStory(storyFormat.value)
}
</script>

<style></style>
