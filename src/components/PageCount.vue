<template>
    <div class="rounded-full bg-black px-3 font-sans text-white opacity-50">
        {{ index }} / {{ length }}
    </div>
</template>

<script setup>
const props = defineProps({
    length: {
        type: Number,
        required: true,
    },
    index: {
        type: Number,
        default: false,
    },
})

const { length, index } = toRefs(props)

const emit = defineEmits(['index'])
</script>
