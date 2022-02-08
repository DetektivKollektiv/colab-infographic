<template>
    <div class="w-full">
        <div class="sticky top-[-1px] row-auto grid grid-cols-5 space-x-2 pt-2">
            <div v-for="phase in WAS.phases" :key="phase">
                <div class="group relative flex flex-col items-center">
                    <div
                        class="relative z-10 flex items-center justify-center rounded-full border-2 border-red-500 transition-all"
                        :class="
                            parseInt(phase.id) < currentElement
                                ? 'label-sm h-4 w-4 bg-red-500 text-white md:h-8 md:w-8'
                                : parseInt(phase.id) > currentElement
                                ? 'label-sm h-4 w-4 bg-white md:h-8 md:w-8'
                                : 'label-xl -mt-2 h-8 w-8 bg-red-500 text-white md:h-12 md:w-12'
                        "
                    >
                        <span
                            :class="
                                parseInt(phase.id) !== currentElement
                                    ? 'hidden md:block'
                                    : ''
                            "
                        >
                            {{ parseInt(phase.id) }}
                        </span>
                    </div>

                    <div
                        class="absolute mt-2 h-0.5 w-full bg-red-500 md:mt-4"
                        :class="{
                            'right-0 w-1/2': phase.id == 1,
                            'left-0 w-1/2': phase.id == 5,
                        }"
                    >
                        <i
                            v-if="phase.id != 5"
                            class="fas fa-caret-right absolute right-0 mt-0.5 translate-x-full -translate-y-1/2 text-4xl text-red-500"
                        ></i>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="showDescription"
            class="scrollbar-hidden relative z-20 flex w-full snap-x snap-mandatory grid-cols-5 overflow-x-scroll md:grid"
            ref="container"
            @scroll="update"
        >
            <div
                class="w-full flex-shrink-0 snap-center text-center"
                v-for="phase in WAS.phases"
                :key="phase"
            >
                <p class="label-sm mt-2 md:mt-4">
                    {{ phase.text }}
                </p>
                <p class="snap-start">
                    {{ phase.description }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { WAS } from '@/api/infographic'

const props = defineProps({
    phaseIndex: {
        type: Number,
    },
    showDescription: {
        type: Boolean,
        default: false,
    },
    showText: {
        type: Boolean,
        default: false,
    },
})

const { showDescription, showText } = toRefs(props)

const container = ref(null)
const currentElement = ref(1)

function getElementsLefts() {
    return Array.prototype.slice
        .call(container.value.children)
        .map((el) => el.getBoundingClientRect().x)
}

function getCurrentElement() {
    const elementsLefts = getElementsLefts()
    return elementsLefts.indexOf(
        elementsLefts.reduce((prev, curr) =>
            Math.abs(curr - 0) < Math.abs(prev - 0) ? curr : prev
        )
    )
}

function update() {
    if (getCurrentElement() !== currentElement.value) {
        currentElement.value = getCurrentElement() + 1
    }
}

const active = (index) => {
    return currentElement.value + 1 == index
}

const isMd = useMediaQuery('(min-width: 768px)')

watch(isMd, () => {
    if (isMd) {
        currentElement.value = 6
    }
})
</script>
