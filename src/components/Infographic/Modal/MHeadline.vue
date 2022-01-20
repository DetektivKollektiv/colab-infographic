<template>
    <h3>{{ content }}</h3>
</template>
<script setup>
const props = defineProps({
    content: {
        type: String,
        required: true,
    },
})
const { content } = toRefs(props)
</script>
