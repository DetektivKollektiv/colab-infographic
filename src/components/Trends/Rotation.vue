<template>
    <div class="overflow-hidden bg-yellow-500" :class="bg">
        <div class="w-screen relative h-[80vh] min-h-[600px]">
            <div
                class="rounded-full w-[500vw] h-[500vw] absolute -translate-x-1/2 left-1/2"
                :class="color"
            ></div>

            <div
                class="w-0 h-[500vw] relative left-1/2 -translate-x-1/2 transition-all hidden lg:block"
                :style="getStyle(currentRotation * -1)"
            >
                <div
                    class="h-[500vw] w-0 absolute left-1/2 cursor-pointer"
                    v-for="trend in trendsWithRotation"
                    :key="trend"
                    :style="getStyle(trend.rotation)"
                    :class="{
                        'opacity-0 md:opacity-50': isActive(trend.rotation),
                    }"
                    @click="setCurrentRotation(trend.rotation)"
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

            <div class="lg:hidden">
                <TextSlide
                    :trends="trendsWithRotation"
                    :subtitle="subtitle"
                ></TextSlide>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, watch, watchEffect } from '@vue/runtime-core'

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

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num
}

const rotation = computed(() => Math.max(32 - width.value / 80, 10))

watchEffect(() => {
    console.log(rotation.value)
})

const { bg, color, trends } = toRefs(props)

function getElement(array, element, value) {
    return array[array.indexOf(element) + value] || array[0]
}

const trendsFormated = reactive(
    setRotations([...trends.value, ...trends.value])
)

const trendsWithRotation = computed(() => setRotations(trendsFormated))

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
const currentRotation = ref(
    trendsWithRotation.value[trendsWithRotation.value.length / 2].rotation
)

function setCurrentRotation(rotation) {
    currentRotation.value = rotation
}

const activeElement = computed(() =>
    trendsWithRotation.value.findIndex(
        (trend) => trend.rotation === currentRotation.value
    )
)

watch(activeElement, (newValue, prevValue) => {
    if (Math.max(0, newValue - prevValue)) {
        // push first element of array to the end
        trendsFormated.push(trendsFormated.shift())
    } else {
        // push last element of array to the beginning
        trendsFormated.unshift(trendsFormated.pop())
    }
    console.log(
        trendsWithRotation.value[0],
        trendsWithRotation.value[trendsFormated.length - 1]
    )
})

function isActive(rotation) {
    return currentRotation.value !== rotation
}
</script>
