<template>
    <div class="relative" v-for="story in [stories[0]]" :key="story">
        <div
            class="bg-gradient-to-b from-transparent to-black w-full absolute h-[50vh] opacity-25"
        ></div>
        <div class="absolute bottom-4 w-full px-4">
            <div class="container mx-auto text-white">
                <TextBlock>
                    <template v-slot:subtitle>
                        <p class="font-serif">{{ story.subtitle }}</p>
                    </template>
                    <template v-slot:title>
                        <h1>{{ story.title }}</h1>
                    </template>
                    <template v-slot:description>
                        <p>
                            {{ story.description }}
                        </p>
                    </template>
                </TextBlock>
                <ButtonText> Trends </ButtonText>
            </div>
        </div>

        <img class="object-cover w-screen h-[50vh]" :src="story.image" alt="" />
    </div>
</template>
<script setup>
import TextBlock from '@/components/TextBlock.vue'
import ButtonText from '@/components/ButtonText.vue'

import stories from '@/api/stories_template.json'

console.log(stories)
</script>
<style lang=""></style>
