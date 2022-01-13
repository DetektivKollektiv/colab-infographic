<template>
    <div class="flex gap-2">
        <div
            v-for="i in length"
            :key="i"
            class="w-2 h-2 border-2 rounded-full border-red-500"
            :class="i <= index ? 'bg-red-500' : 'bg-white'"
        ></div>
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
<style lang=""></style>
