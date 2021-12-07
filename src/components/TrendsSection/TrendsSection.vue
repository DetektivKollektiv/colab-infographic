<template>
    <div class="h-screen w-screen flex flex-col items-center">
        <TrendsSectionContainer
            headline="Makrotrends"
            color="slategray"
            :trendData="makrotrendData"
        ></TrendsSectionContainer>
        <TrendsSectionContainer headline="Mesotrends" color="silver" :trendData="mesotrendData"></TrendsSectionContainer>
    </div>
</template>

<script setup>
import TrendsSectionContainer from "./TrendsSectionContainer.vue";
import makrotrendData from "/src/assets/makrotrends.json"
import mesotrendData from "/src/assets/mesotrends.json"
</script>

<script>
</script>
