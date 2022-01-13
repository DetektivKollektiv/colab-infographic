<template>
    <div class="relative w-full pb-[38%]">
    <div
        class="trend-container flex flex-col items-center bg-center bg-cover absolute top-0 left-0 right-0 bottom-0"
    >
        <div class="flex flex-col items-center py-12">
            <h2 class="text-xl font-bold">{{ headline }}</h2>
            <trendsSectionContent :trendData="trendData"></trendsSectionContent>
        </div>
    </div>
    </div>
</template>

<style scoped>
.trend-container {
    background-color: var(--color);
}
</style>

<script setup>
import trendsSectionContent from "./TrendsSectionContent.vue";
</script>

<script>
export default {
    props: ['headline', 'color', 'trendData'],
    computed: {
        cssProps() {
            return {
                '--color': this.color,
            }
        }
    }
}
</script>
