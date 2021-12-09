<template>
    <div class="w-screen flex flex-col items-center">
        <div class="flex flex-col items-center text-center py-20 w-1/3">
            <h3 class="text-xl">Lorem ipsum dolor sit</h3>
            <h2 class="text-3xl pb-4">Die Wertschöpfungskette</h2>
            <p>Hier beginnt die interaktive Wertschöpfungkette. Erst zeigen wir euch die Makro- und Mesotrends, dann könnt ihr die Grafik frei erkunden</p>

        </div>
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
import makrotrendData from "/src/api/makrotrends.json"
import mesotrendData from "/src/api/mesotrends.json"
</script>

<script>
</script>
