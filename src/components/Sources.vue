<template lang="">
    <p v-if="sources.length > 0" class="label-xs">Quellen</p>
    <div class="mt-1 flex flex-col">
        <a
            target="_blank"
            class="text-xs text-blue-500"
            v-for="source in sources"
            :key="source"
            :href="source.link"
            >{{ source.text }}</a
        >
    </div>
</template>
<script setup>
const props = defineProps({
    sources: {
        type: Object,
        required: true,
    },
})

const { sources } = toRefs(props)
</script>
