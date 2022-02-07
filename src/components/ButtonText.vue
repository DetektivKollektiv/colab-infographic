<template>
    <button
        class="inline-block rounded-full border-2 border-red-500 px-4"
        :class="active ? 'bg-red-500 text-white' : 'bg-none hover:text-red-500'"
    >
        <span class="text-sm font-bold md:text-lg">
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
