<template>
    <div class="max-w-md">
        <slot name="title"></slot>

        <div class="w-full h-0.5 bg-red-500 mb-2"></div>
        <div
            class="flex flex-row overflow-x-auto w-full snap-mandatory snap-x gap-6 scrollbar-hidden"
        >
            <slot v-for="i in 5" :key="i" name="description"></slot>
        </div>
    </div>
</template>
<script setup></script>
