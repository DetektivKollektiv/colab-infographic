<template>
    <button
        class="px-4 rounded-full border-2 border-red-500 inline-block"
        :class="active ? 'bg-red-500 text-white' : 'bg-none'"
    >
        <span class="font-bold text-sm md:text-lg">
            <slot></slot>
        </span>
    </button>
</template>
<script setup>
const props = defineProps({
    active: {
        type: Boolean,
        default: false,
    },
})

const { active } = toRefs(props)
</script>
