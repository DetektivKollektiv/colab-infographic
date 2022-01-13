<template>
    <div
        class="text-center relative w-full h-full font-headline"
        :class="current_slide == 1 ? 'text-4xl' : 'text-2xl'"
    >
        <div class="bg-yellow-500 circle h-full w-full">
            <p :class="current_slide == 3 ? 'font-bold' : ''">Makro-Trends</p>
        </div>
        <div class="bg-yellow-400 circle h-2/3 w-2/3">
            <p :class="current_slide == 4 ? 'font-bold' : ''">Meso-Trends</p>
        </div>
        <div class="bg-white circle h-1/3 w-1/3">
            <p class="whitespace-pre" :class="[5,6].includes(current_slide) ? 'font-bold' : ''">{{ current_slide == 1 ? 'Wert-\nschöpfungskette' : 'WSK' }}</p>
        </div>
    </div>
</template>

<style scoped>
.circle {
    border-radius: 50%;
    padding-top: 7.5%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
</style>

<script>

export default {
    props: ['current_slide']
}
</script>
