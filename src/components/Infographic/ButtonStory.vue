<template>
    <ButtonText :active="active" @click="setStory">{{ story }}</ButtonText>
</template>

<script setup>
import { toRefs, ref, computed } from '@vue/reactivity'
import { useStoryStore } from '@/stores/story'

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
    return useStoryStore().story === storyFormat.value
})

function setStory() {
    useStoryStore().setStory(storyFormat.value)
}
</script>

<style></style>
