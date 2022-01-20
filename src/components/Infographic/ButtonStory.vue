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

const active = computed(() => {
    return useInfographicStore().story === story.value
})

function setStory() {
    active.value
        ? useInfographicStore().setStory('')
        : useInfographicStore().setStory(story.value)
}
</script>

<style></style>
