<template>
    <div class="overflow-hidden bg-yellow-500" :class="bg">
        <div class="w-screen relative h-[80vw] min-h-[600px]">
            <div
                class="rounded-full w-[500vw] h-[500vw] absolute -translate-x-1/2 left-1/2"
                :class="color"
            ></div>

            <div
                class="w-0 h-[500vw] relative left-1/2 -translate-x-1/2 transition-all block"
                :style="getStyle(currentElement.rotation * -1)"
            >
                <div
                    class="h-[500vw] w-0 absolute left-1/2 cursor-pointer"
                    v-for="trend in trendsFormated"
                    :key="trend"
                    :style="getStyle(trend.rotation)"
                    :class="{
                        'opacity-0 md:opacity-50': isActive(trend),
                    }"
                    @click="setCurrentElement(trend)"
                >
                    <TextBlock
                        class="w-screen -translate-x-1/2 mt-[40vw] -translate-y-1/2"
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

            <div class="hidden">
                <TextSlide :trends="trends" :subtitle="subtitle"></TextSlide>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, watch } from '@vue/runtime-core'

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

const rotation = computed(() => Math.max(32 - width.value / 80, 10))

const { bg, color, trends } = toRefs(props)

const trendsFormated = reactive(
    setRotations([...trends.value, ...trends.value])
)

function setRotations(array) {
    return array.map((trend, i) => ({
        ...trend,
        rotation: rotation.value * (i - array.length / 2),
    }))
}

function getStyle(rotation) {
    return {
        transform: `rotate(${rotation}deg) translateX(-50%)`,
    }
}
const currentElement = ref(trendsFormated[trendsFormated.length / 2])

function setCurrentElement(element) {
    currentElement.value = element
}

watch(currentElement, (newValue, prevValue) => {
    if (prevValue.rotation < newValue.rotation) {
        trendsFormated.push(trendsFormated.shift())

        trendsFormated[trendsFormated.length - 1].rotation =
            trendsFormated[trendsFormated.length - 2].rotation + rotation.value
    } else {
        trendsFormated.unshift(trendsFormated.pop())

        trendsFormated[0].rotation = trendsFormated[1].rotation - rotation.value
    }
})

function updateRotations() {
    trendsFormated[0].rotation = trendsFormated[1].rotation - rotation.value

    trendsFormated[trendsFormated.length - 1].rotation =
        trendsFormated[trendsFormated.length - 2].rotation + rotation.value
}

function isActive(element) {
    return currentElement.value !== element
}
</script>
