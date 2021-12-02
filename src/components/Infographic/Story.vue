<template>
    <label
        class="space-x-2 cursor-pointer flex items-center"
        :for="storyFormat"
        @click="onClick"
    >
        <div
            class="rounded-full border-2 border-gray-800 mr-2"
            :class="{ 'border-0 bg-purple-500': active }"
            style="height: 12px; width: 12px"
        ></div>
        {{ story }}</label
    >
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

function onClick() {
    useStoryStore().setStory(storyFormat.value)
}
</script>

<style></style>
