<template>
    <div class="trend-container flex flex-col items-center w-full" :style="cssProps">
        <div class="flex flex-col items-center py-12">
            <h2 class="text-xl font-bold">{{ headline }}</h2>
            <trendsSectionContent :trendData="trendData"></trendsSectionContent>
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
