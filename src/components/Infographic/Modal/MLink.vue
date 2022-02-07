<template>
    <a :href="content" target="_blank" class="underline text-blue-500"
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
