<template>
    <div class="fixed z-40 h-screen w-full cursor-pointer">
        <div
            class="absolute inset-0 z-50 mx-auto my-auto h-fit cursor-default rounded-md bg-white py-6 px-8"
            style="max-width: 66ch"
        >
            <ButtonClose
                @click="infographicStore.closeModal()"
                class="float-right"
            ></ButtonClose>
            <div class="mt-8">
                <h2>{{ content.title }}</h2>
                <p class="label-sm text-red-500">{{ content.subtitle }}</p>
                <div v-for="des in content.description" :key="des" class="mt-4">
                    <component
                        class="mt-2"
                        v-for="([key, content], i) in Object.entries(des)"
                        :key="i"
                        :is="elements[key]()"
                        :content="content"
                    ></component>
                </div>
            </div>
            <div class="mt-4">
                <Sources :sources="content.sources"></Sources>
            </div>
        </div>
        <div
            @click="infographicStore.closeModal()"
            class="fixed z-40 h-screen w-full bg-black opacity-50"
        ></div>
    </div>
</template>
<script setup>
import { useInfographicStore } from '@/stores/infographic'

const infographicStore = useInfographicStore()

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
    link: () =>
        defineAsyncComponent(() =>
            import('@/components/infographic/Modal/MLink.vue')
        ),
}

import { onUnmounted } from '@vue/runtime-core'
const content = infographicStore.modalContent

const isLocked = useScrollLock(document.documentElement)
isLocked.value = true

onUnmounted(() => {
    isLocked.value = false
})
</script>
