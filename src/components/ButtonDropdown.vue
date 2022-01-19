<template>
    <!-- create Dropdown Menu -->
    <button
        class="px-4 border-2 border-red-500 inline-block bg-white overflow-hidden rounded-2xl text-right whitespace-nowrap transition-all"
        @click="closed = !closed"
        :style="{ width }"
    >
        <p class="font-bold text-sm md:text-lg inline-block" ref="textElement">
            {{ text }}
            <i v-if="closed" class="fas fa-caret-down ml-2 text-red-500"></i>
            <i class="fas fa-caret-up ml-2 text-red-500" v-else></i>
        </p>

        <div
            class="text-sm md:text-lg transition-all space-y-2 float-right"
            :class="{ 'mt-4': !closed }"
            ref="optionsElement"
            :style="{ height }"
        >
            <p
                v-for="option in options"
                :key="option.value"
                @click="emit('option', option.text)"
            >
                <i :class="option.icon + ' ' + option.color" class="mr-2"></i>
                {{ option.text }}
            </p>
        </div>
    </button>
</template>
<script setup>
const closed = ref(true)

const options = [
    {
        text: 'Forschen & entwickeln',
        icon: 'fas fa-atom',
        color: 'text-red-500',
        value: 'option-1',
    },
    {
        text: 'Experimentieren & messen',
        icon: 'fas fa-microscope',
        color: 'text-black',
        value: 'option-2',
    },
    {
        text: 'Aufdecken & verteidigen',
        icon: 'fas fa-search',
        color: 'text-yellow-500',
        value: 'option-3',
    },
    {
        text: 'Platzieren & antreiben',
        icon: 'fas fa-map-marker-alt',
        color: 'text-blue-500',
        value: 'option-3',
    },
    {
        text: 'Demonstrieren & aktivieren',
        icon: 'fas fa-toggle-on',
        color: 'text-blue-light-500',
        value: 'option-3',
    },
]

const text = ref('Maßnahmen')

const optionsElement = ref(null)
const textElement = ref(null)

const height = computed(() => {
    if (optionsElement.value !== null) {
        return closed.value
            ? '0px'
            : optionsElement.value.scrollHeight + 16 + 'px'
    } else {
        return '0px'
    }
})

const width = computed(() => {
    if (textElement.value !== null && optionsElement.value !== null) {
        return closed.value
            ? textElement.value.scrollWidth + 36 + 'px'
            : optionsElement.value.scrollWidth + 32 + 'px'
    } else {
        return 'auto'
    }
})

const emit = defineEmits(['option'])
</script>
<style></style>
