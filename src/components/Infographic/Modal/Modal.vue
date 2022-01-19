<template>
    <div class="w-full h-screen fixed z-40 cursor-pointer">
        <div
            class="absolute inset-0 bg-white z-50 rounded-md mx-auto my-auto py-6 px-8 h-fit cursor-default"
            style="max-width: 66ch"
        >
            <h2>{{ content.title }}</h2>
            <p class="text-red-500 label-sm">{{ content.subtitle }}</p>

            <div v-for="des in content.description" :key="des" class="mt-4">
                <component
                    class="mt-2"
                    v-for="([key, content], i) in Object.entries(des)"
                    :key="i"
                    :is="elements[key]()"
                    :content="content"
                ></component>
            </div>
            <div class="mt-4">
                <Sources :sources="content.sources"></Sources>
            </div>
        </div>
        <div class="w-full h-screen bg-black opacity-50 fixed z-40"></div>
    </div>
</template>
<script setup>
const elements = {
    headline: () =>
        defineAsyncComponent(() =>
            import('@/components/infographic/Modal/MHeadline.vue')
        ),
    text: () =>
        defineAsyncComponent(() =>
            import('@/components/infographic/Modal/MText.vue')
        ),
    image: () =>
        defineAsyncComponent(() =>
            import('@/components/infographic/Modal/MImage.vue')
        ),
}

import { WER, WIE, WAS } from '@/api/infographic'
const content = WER['01'][0]

console.log(WER['01'][0])

const isLocked = useScrollLock(document.documentElement)
isLocked.value = true // lock
</script>
