<template>
    <!-- create Dropdown Menu -->
    <button
        class="px-4 border-2 border-red-500 inline-block bg-white overflow-hidden rounded-2xl text-right whitespace-nowrap transition-all"
        @click="closed = !closed"
        :style="{ width }"
    >
        <div
            class="font-bold text-sm md:text-lg inline-block"
            ref="textElement"
        >
            <span>
                <i :class="title.icon + ' ' + title.color"></i>
                <b class="hover:text-red-500 ml-2">{{ title.text }}</b>
                <i
                    v-if="closed"
                    class="fas fa-caret-down ml-2 text-red-500"
                ></i>
                <i class="fas fa-caret-up ml-2 text-red-500" v-else></i>
            </span>
        </div>

        <div
            class="text-sm md:text-lg transition-all space-y-2 float-right"
            :class="{ 'mt-4': !closed }"
            ref="optionsElement"
            :style="{ height }"
        >
            <button
                v-if="activeOption"
                @click="emit('option', '')"
                class="label-md text-red-500"
            >
                Auswahl löschen
            </button>
            <p
                v-for="option in options"
                :key="option.text"
                @click="emit('option', option.text)"
                :class="{
                    'text-red-500 font-bold': option.text === title.text,
                }"
                class="hover:text-red-500 whitespace-nowrap"
            >
                <i :class="option.icon + ' ' + option.color" class="mr-2"></i>
                {{ option.text }}
            </p>
        </div>
    </button>
</template>
<script setup>
import { computed } from '@vue/reactivity'

const closed = ref(true)

const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true,
    },
    activeOption: {
        type: Object,
    },
})

const { options, activeOption, text } = toRefs(props)

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
            : Math.max(
                  optionsElement.value.scrollWidth + 36,
                  textElement.value.scrollWidth + 36
              ) + 'px'
    } else {
        return 'auto'
    }
})

const title = computed(() => {
    if (activeOption.value) {
        return activeOption.value
    } else {
        return { text: text.value, icon: '', color: '' }
    }
})

const emit = defineEmits(['option'])
</script>
<style></style>
