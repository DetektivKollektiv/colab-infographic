<template>
    <div
        @mouseover="hover = true"
        @mouseleave="hover = false"
        class="p-4 bg-gray-100 rounded-md w-full transition-all duration-300 overflow-hidden"
        :class="{
            'bg-purple-500 text-white': hover,
            'duration-75 border-2 border-purple-500 bg-purple-100 ': active,
        }"
        :style="{ height: height + 'px' }"
    >
        <p ref="textContainer" class="content">
            {{ text }}
        </p>
    </div>
</template>

<script setup>
import { nextTick, onMounted, watch, computed, ref, toRefs } from 'vue'
import { useStoryStore } from '@/stores/story'

const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
})

const { content } = toRefs(props)

const textContainer = ref(0)

function getContentHeight() {
    return textContainer.value.scrollHeight + 32
}

const hover = ref(false)

const text = computed(() => {
    return hover.value ? content.value.example : content.value.title
})

const active = computed(() => {
    return content.value.storys.includes(useStoryStore().story)
})

watch([text, active], () => {
    nextTick(() => {
        height.value = getContentHeight()
    })
})

const height = ref(0)

onMounted(() => {
    nextTick(() => {
        height.value = getContentHeight() // 16px for the padding
    })
})
</script>
