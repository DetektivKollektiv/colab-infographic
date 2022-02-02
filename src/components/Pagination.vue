<template>
    <div class="flex space-x-2 md:space-x-6 text-red-500 text-2xl items-center">
        <button class="hidden md:block" @click="emit('index', index - 1)">
            <i v-if="showArrows" class="fas fa-caret-left"></i>
        </button>
        <button
            v-for="i in Array(length).keys()"
            :key="i"
            class="w-2 md:w-4 h-2 md:h-4 border-2 rounded-full border-red-500"
            :class="i <= index ? 'bg-red-500' : 'bg-white'"
            @click="emit('index', i)"
        ></button>
        <button
            class="hidden md:block"
            :class="{ 'animate-ping': index == 0 }"
            @click="emit('index', index + 1)"
        >
            <i v-if="showArrows" class="fas fa-caret-right"></i>
        </button>
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
    showArrows: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['index'])
</script>
<style lang=""></style>
