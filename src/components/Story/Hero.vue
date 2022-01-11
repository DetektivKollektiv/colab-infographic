<template >
    <div class="h-2/3 relative" v-for="story in [stories[0]]" :key="story">
        <div class="absolute bottom-4 w-full px-4">
            <div class="container mx-auto">
                <h1>Hello World</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl eget consectetur consectetur,
                    nibh nisl consectetur nisl, eget consectetur nisl nisl
                    eget consectetur nisl.
                </p>
            </div>
        </div>
        <img class="object-cover w-screen h-[50vh]"  :src="story.image" alt="">
    </div>
</template>
<script setup>
import stories from '@/api/stories_template.json'

console.log(stories)
</script>
<style lang="">
    
</style>