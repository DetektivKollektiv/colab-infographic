<template>
    <button
        class="px-4 rounded-full border-2 border-red-500 inline-block"
        :class="active ? 'bg-red-500' : 'bg-none'"
    >
        <p class="font-bold text-lg">
            <slot></slot>
        </p>
    </button>
</template>
<script setup>
import { toRefs } from '@vue/reactivity'

const props = defineProps({
    active: {
        type: Boolean,
        default: false,
    },
})

const { active } = toRefs(props)
</script>
