<template>
    <div class="relative">
        <div
            v-for="(block, i) in texts"
            :key="block"
            class="flex flex-row scroll-px-4 md:scroll-px-0 overflow-y-hidden w-full snap-mandatory snap-x scrollbar-hidden"
            @scroll="update"
            ref="container"
        >
            <div
                class="scroll-px-4 first:ml-4 last:mr-4 first:md:ml-0 md:last:mr-0"
            >
                <div
                    v-for="text in block.descriptions"
                    class="py-2 mb-8 md:mb-12 h-64 md:h-fit"
                    :key="text"
                >
                    <h3 class="absolute -translate-y-6 md:-translate-y-8">
                        {{ block.title }}
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

watch(texts, () => console.log(texts.value))

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
</script>
