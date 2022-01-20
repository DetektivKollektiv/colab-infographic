<template>
    <div
        class="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hidden h-[80vh] min-h-[600px]"
        ref="container"
        @scroll="update"
    >
        <PageCount
            :length="trends.length"
            :index="currentElement"
            class="absolute right-4 top-12"
        ></PageCount>
        <div
            v-for="trend in trends"
            :key="trend"
            class="snap-start w-screen flex-shrink-0"
        >
            <TextBlock
                class="relative top-1/2 -translate-y-1/2 -mt-4 container-box"
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

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2">
        <Pagination
            :length="trends.length"
            :index="currentElement - 1"
        ></Pagination>
    </div>
</template>
<script setup>
const props = defineProps({
    trends: {
        type: Array,
        required: true,
    },
    subtitle: {
        type: String,
        default: 'Trends',
    },
})

const { trends, subtitle } = toRefs(props)

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
        currentElement.value = getCurrentElement()
    }
}

const active = (index) => {
    return currentElement.value + 1 == index
}
</script>
