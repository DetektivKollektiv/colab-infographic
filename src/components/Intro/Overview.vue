<template>
    <div
        class="text-center relative w-full h-full font-headline"
        :class="
            current_slide == 1 ? 'lg:text-4xl text-xl' : 'lg:text-2xl text-xl'
        "
    >
        <div class="bg-yellow-500 circle h-full w-full">
            <span :class="current_slide == 3 ? 'font-bold' : ''"
                >Makro-Trends</span
            >
        </div>
        <div
            class="bg-yellow-400 circle lg:h-2/3 lg:w-2/3 h-full w-full top-32 lg:top-0"
        >
            <span :class="current_slide == 4 ? 'font-bold' : ''"
                >Meso-Trends</span
            >
        </div>
        <div
            class="bg-white circle lg:h-1/3 lg:w-1/3 h-full w-full top-64 lg:top-0"
        >
            <span
                class="block lg:hidden"
                :class="[5, 6].includes(current_slide) ? 'font-bold' : ''"
                >Wertschöpfungskette</span
            >
            <span
                class="hidden lg:block -mt-4 2xl:-mt-0"
                :class="[5, 6].includes(current_slide) ? 'font-bold' : ''"
                >Wert-<br>schöpfungskette</span
            >
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
@media only screen and (max-width: 1023px) {
    .circle {
        padding-top: 2%;
    }
}
@media only screen and (max-width: 1023px) and (min-width: 651px) {
   .circle {
        padding-top: 1%;
    }
}
</style>

<script>
export default {
    props: ['current_slide'],
}
</script>
