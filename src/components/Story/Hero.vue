<template>
    <div
        class="relative h-[50vh] min-h-[400px] max-h-[30rem] border-t-2 border-red-500"
    >
        <div
            class="bg-gradient-to-b from-transparent to-black w-full h-full absolute opacity-40"
        ></div>
        <div class="flex justify-start items-center container-box">
            <div class="absolute top-1/2 -translate-y-1/2">
                <div class="text-white">
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
                            :active="state === 'phasen' && active"
                        >
                            Phasen</ButtonText
                        >
                        <ButtonText
                            @click="emit('state', 'uebersicht')"
                            :active="state === 'uebersicht' && active"
                        >
                            Übersicht & Trends</ButtonText
                        >
                    </div>
                </div>
            </div>
        </div>

        <img
            class="object-cover w-screen h-[50vh] max-h-[30rem] min-h-[400px]"
            :src="story.image"
            alt=""
        />
    </div>
</template>
<script setup>
import { watchEffect } from '@vue/runtime-core'

const props = defineProps({
    story: {
        type: Object,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
})

const { story, state, active } = toRefs(props)

const emit = defineEmits(['state'])
</script>
<style lang=""></style>
