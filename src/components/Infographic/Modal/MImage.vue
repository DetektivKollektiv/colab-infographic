<template>
    <img :src="content" />
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
