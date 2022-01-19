<template>
    <div
        @mouseover="hover = true"
        @mouseleave="hover = false"
        @click="infographicStore.setModal(content)"
        class="px-4 py-2 bg-white rounded-md w-full transition-all duration-300 overflow-hidden cursor-pointer"
        :class="{
            'duration-75 border-2 border-red-500': active,
        }"
    >
        <div class="group">
            <p class="group-hover:text-red-500 label-md">
                {{ content.title }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, toRefs } from 'vue'
import { useInfographicStore } from '@/stores/infographic'

const infographicStore = useInfographicStore()

const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
})

const { content } = toRefs(props)

console.log(content.value)

const active = computed(() => {
    return content.value.stories.includes(infographicStore.story)
})

const height = ref(0)
</script>
