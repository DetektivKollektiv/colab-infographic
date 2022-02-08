<template>
    <div
        class="relative h-[50vh] max-h-[30rem] min-h-[400px] border-t-2 border-red-500"
    >
        <div
            class="absolute h-full w-full bg-gradient-to-b from-transparent to-black opacity-40"
        ></div>
        <div class="container-box flex items-center justify-start">
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
                    <div class="mt-4 space-x-2">
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
            class="h-[50vh] max-h-[30rem] min-h-[400px] w-screen object-cover"
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
