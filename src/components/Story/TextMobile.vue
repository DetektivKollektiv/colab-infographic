<template>
    <div class="max-w-md">
        <slot name="title"></slot>

        <div class="w-full h-0.5 bg-red-500 mb-2"></div>
        <div
            class="flex flex-row overflow-x-auto w-full snap-mandatory snap-x gap-6 scrollbar-hidden"
        >
            <slot name="description"></slot>
        </div>
    </div>
</template>
<script setup>
const container = ref(null)
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
useEventListener(container, 'scroll', () => {
    if (getCurrentElement() !== currentElement.value) {
        currentElement.value = getCurrentElement()
        emit('phaseIndex', currentElement.value)
    }
})

const active = (index) => {
    return currentElement.value + 1 == index
}
</script>
