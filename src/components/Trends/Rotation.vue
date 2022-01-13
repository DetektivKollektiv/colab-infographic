<template>
    <div class="overflow-hidden bg-yellow-500" :class="bg">
        <div class="w-screen relative h-[80vh]">
            <div
                class="rounded-full w-[500vw] h-[500vw] absolute -translate-x-1/2 left-1/2"
                :class="color"
            ></div>

            <div
                class="w-0 h-[500vw] relative left-1/2 -translate-x-1/2 transition-all hidden md:block"
                :style="getStyle(currentRotation * -1)"
            >
                <div
                    class="h-[500vw] w-0 absolute left-1/2 cursor-pointer"
                    v-for="trend in getTrends(trends)"
                    :key="trend"
                    :style="getStyle(trend.rotation)"
                    :class="{
                        'opacity-0 md:opacity-50':
                            currentRotation !== trend.rotation,
                    }"
                    @click="setRotation(trend.rotation)"
                >
                    <TextBlock
                        class="w-screen -translate-x-1/2 mt-[40vh] -translate-y-1/2"
                    >
                        <template v-slot:subtitle>
                            <p class="font-serif">{{ subtitle }}</p>
                        </template>
                        <template v-slot:title>
                            <h1>{{ trend.headline }}</h1>
                        </template>
                        <template v-slot:description>
                            <p>
                                {{ trend.text }}
                            </p>
                        </template>
                    </TextBlock>
                </div>
            </div>
            <TextSlide :trends="getTrends(trends)"></TextSlide>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from '@vue/runtime-core'

const props = defineProps({
    bg: {
        type: String,
    },
    color: {
        type: String,
    },
    trends: {
        type: Array,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
})

const { width } = useWindowSize()

const rotation = computed(() => 24 - width.value / 140)

useEventListener('resize', () => console.log(rotation.value))

const { bg, color, trends } = toRefs(props)

function getTrends(trends) {
    return trends.map((trend, i) => ({
        rotation: rotation.value * i,
        headline: trend.headline,
        text: trend.text,
    }))
}

function getStyle(rotation) {
    return {
        transform: `rotate(${rotation}deg) translateX(-50%)`,
    }
}
const currentRotation = ref(0)

function setRotation(rotation) {
    currentRotation.value = rotation
}
</script>
<style lang=""></style>
