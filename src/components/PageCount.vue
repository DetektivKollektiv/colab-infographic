<template>
    <div class="bg-gray-500 text-white font-sans rounded-full px-2">{{index}} / {{length}}</div>
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
