<template>
    <div class="relative">
        <div class="flex space-x-4 justify-center float-left">
            <ButtonStory
                v-for="story in stories"
                :story="story.title"
                :key="story.title"
            ></ButtonStory>
        </div>
        <ButtonDropdown class="absolute right-0 z-10"></ButtonDropdown>
    </div>
</template>
<script setup>
import stories from '@/api/stories.json'
</script>
<style></style>
