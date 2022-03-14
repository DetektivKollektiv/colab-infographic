<template>
    <div class="absolute z-40 w-full cursor-pointer" :style="hScreen">
        <div
            class="absolute inset-0 z-50 mx-auto my-auto h-fit max-h-[90%] cursor-default overflow-y-auto rounded-md bg-white py-6 px-8"
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
            class="absolute z-40 h-full w-full bg-black opacity-50"
        ></div>
    </div>
</template>
<script setup>
import { computed, onMounted, onUnmounted } from '@vue/runtime-core'
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

const content = infographicStore.modalContent

const height = ref(0)
const y = ref(0)

window.parent.window.addEventListener('scroll', () => {
    y.value = window.parent.window.scrollY
})

const hScreen = computed(() => ({
    height: `${height.value}px`,
    top: `${y.value}px`,
}))

onMounted(() => {
    height.value = window.parent.window.innerHeight
    y.value = window.parent.window.scrollY
})
useEventListener(window.parent.window, 'resize', () => {
    height.value = window.parent.window.innerHeight
})
</script>
