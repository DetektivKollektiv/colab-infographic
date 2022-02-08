<template>
    <a :href="content" target="_blank" class="text-blue-500 underline"
        >Zur Website</a
    >
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
