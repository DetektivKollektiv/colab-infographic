<template>
    <div
        @mouseover="hover = true"
        @mouseleave="hover = false"
        @click="example = !example"
        class="
            p-4
            bg-gray-100
            rounded-md
            w-full
            transition-all
            duration-300
            overflow-hidden
            cursor-pointer
        "
        :class="{
            'bg-purple-500 text-white': example,
            'duration-75 border-2 border-gray-800': active,
        }"
        :style="{ height: height + 'px' }"
    >
        <div ref="textContainer" class="group">
            <p ref="textElement" class="group-hover:font-bold">
                {{ text }}
            </p>
            <p class="text-md pt-4">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script setup>
//
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
const textElement = ref(0)

function getHeight() {
    return hover.value
        ? textContainer.value.scrollHeight + 32
        : textElement.value.scrollHeight + 32 // 16px for the padding
}

const hover = ref(false)

const example = ref(false)

const text = computed(() => {
    return example.value ? content.value.example : content.value.title
})

const description = computed(() => {
    return example.value
        ? content.value.exampleDescription
        : content.value.description
})

const active = computed(() => {
    return content.value.storys.includes(useStoryStore().story)
})

const height = ref(0)

watch([example, hover], () => {
    nextTick(() => {
        height.value = getHeight()
    })
})

onMounted(() => {
    nextTick(() => {
        height.value = getHeight()
    })
})
</script>
