<template>
    <div>
        <div class="flex h-12">
            <div class="flex bg-gray-800 items-center flex-grow space-x-4 px-4">
                <h1 class="text-xl text-purple-500 font-bold">
                    {{ content.chapter }}
                </h1>
                <h2 class="text-white text-sm">{{ content.text }}</h2>
            </div>
            <div class="triangle"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true,
        },
    },
}
</script>
<style scoped>
.triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 1.5rem 0 1.5rem 1.5rem;
    border-color: transparent transparent transparent
        rgba(31, 41, 55, var(--tw-border-opacity));
}
</style>
