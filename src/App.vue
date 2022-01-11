<script setup>
import Section from './components/Intro/Section.vue'
import TrendsSection from './components/TrendsSection/TrendsSection.vue'
import Infographic from './components/Infographic/Infographic.vue'
</script>

<template>
    <div class="relative min-h-screen">
        <Section></Section>
    </div>
    <Intro_section></Intro_section>
    <trends-section></trends-section>

    <Infographic />
</template>

<style></style>
