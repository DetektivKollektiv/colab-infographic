<template>
    <div class="relative">
        <div
            class="flex flex-row scroll-px-4 md:scroll-px-0 overflow-y-hidden w-full snap-mandatory snap-x scrollbar-hidden"
            @scroll="update"
            ref="container"
        >
            <div
                v-for="(texts, i) in getDescriptions(zippedTexts)"
                :key="texts"
                class="scroll-px-4 first:ml-4 last:mr-4 first:md:ml-0 md:last:mr-0"
            >
                <div
                    v-for="text in texts"
                    class="pt-2 h-52 md:h-72"
                    :key="text"
                >
                    <h3
                        v-if="i == 0"
                        class="absolute -translate-y-6 md:-translate-y-8"
                    >
                        Wie
                    </h3>
                    <div class="w-full h-0.5 bg-red-500"></div>
                    <p class="w-96 flex-shrink-0 snap-start mt-2 mr-4 md:mr-0">
                        {{ text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    texts: {
        type: Object,
        required: true,
    },
    phaseIndex: {
        type: Number,
    },
})
const { texts, phaseIndex } = toRefs(props)

const zippedTexts = texts.value[0].descriptions.map((description, i) => [
    description,
    texts.value[1].descriptions[i],
])

const isMd = useMediaQuery('(max-width: 768px)')
const container = ref(0)
const currentElement = ref(0)

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

const emit = defineEmits(['phaseIndex'])

const active = (index) => {
    return currentElement.value + 1 == index
}

function update() {
    if (getCurrentElement() !== currentElement.value) {
        currentElement.value = getCurrentElement()
        emit('phaseIndex', currentElement.value + 1)
    }
}

function getDescriptions(descriptions) {
    if (phaseIndex > descriptions.length) {
        return descriptions[0]
    }
    return isMd.value ? descriptions : [descriptions[phaseIndex.value - 1]]
}
</script>
