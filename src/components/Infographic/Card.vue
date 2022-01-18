<template>
    <div
        @mouseover="hover = true"
        @mouseleave="hover = false"
        @click="popup = true"
        class="px-4 py-2 bg-white rounded-md w-full transition-all duration-300 overflow-hidden cursor-pointer"
        :class="{
            'duration-75 border-2 border-red-500': active,
        }"
    >
        <div class="group">
            <p class="group-hover:text-red-500 label-md">
                {{ text }}
            </p>
        </div>
    </div>
</template>

<script setup>
//
import { nextTick, onMounted, watch, computed, ref, toRefs } from 'vue'
import { useInfographicStore } from '@/stores/infographic'

const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
})

const { content } = toRefs(props)

const popup = ref(false)

const example = ref(false)

const text = computed(() => {
    return example.value ? content.value.example : content.value.title
})

const active = computed(() => {
    return content.value.storys.includes(useInfographicStore().story)
})

const height = ref(0)
</script>
