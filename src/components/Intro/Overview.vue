<template>
    <div
        class="text-center relative w-full h-full font-headline"
        :class="current_slide == 1 ? 'md:text-4xl text-xl' : 'md:text-2xl text-xl'"
    >
        <div class="bg-yellow-500 circle h-full w-full">
            <span :class="current_slide == 3 ? 'font-bold' : ''">Makro-Trends</span>
        </div>
        <div class="bg-yellow-400 circle md:h-2/3 md:w-2/3 h-full w-full top-32 md:top-0">
            <span :class="current_slide == 4 ? 'font-bold' : ''">Meso-Trends</span>
        </div>
        <div class="bg-white circle md:h-1/3 md:w-1/3 h-full w-full top-64 md:top-0">
            <span class="whitespace-pre" :class="[5,6].includes(current_slide) ? 'font-bold' : ''">{{ current_slide == 1 ? 'Wert-\nschöpfungskette' : 'WSK' }}</span>
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
    bottom: 0;
    margin: auto;
}
@media only screen and (max-width:768px) {
.circle{
    padding-top: 2%;
}
}
</style>

<script>

export default {
    props: ['current_slide']
}
</script>
