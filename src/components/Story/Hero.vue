<template>
    <div class="relative">
        <div
            class="bg-gradient-to-b from-transparent to-black w-full absolute h-[50vh] opacity-25"
        ></div>
        <div class="absolute top-1/2 -translate-y-1/2 w-full px-4">
            <div class="container-box mx-auto text-white">
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
                <div class="space-x-2 mt-4">
                    <ButtonText
                        @click="emit('state', 'phasen')"
                        :active="state === 'phasen'"
                    >
                        Phasen</ButtonText
                    >
                    <ButtonText
                        @click="emit('state', 'uebersicht')"
                        :active="state === 'uebersicht'"
                    >
                        Übersicht</ButtonText
                    >
                    <ButtonText
                        @click="emit('state', 'trends')"
                        :active="state === 'trends'"
                    >
                        Trends</ButtonText
                    >
                </div>
            </div>
        </div>

        <img class="object-cover w-screen h-[50vh]" :src="story.image" alt="" />
    </div>
</template>
<script setup>
import TextBlock from '@/components/TextBlock.vue'
import ButtonText from '@/components/ButtonText.vue'

import { toRefs } from '@vue/reactivity'

const props = defineProps({
    story: {
        type: Object,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
})
const { story, state } = toRefs(props)

const emit = defineEmits(['state'])
</script>
<style lang=""></style>
