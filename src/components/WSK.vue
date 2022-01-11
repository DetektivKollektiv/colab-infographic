<template>
    <div>
        <div class="relative">
            <div class="w-full h-0.5 absolute bg-red-500 z-0 flex items-center">
                <div
                    class="grid grid-cols-5 container-box z-10 relative items-center"
                >
                    <div
                        class="flex items-center flex-col cursor-pointer"
                        v-for="(phaseText, i) in phases"
                        :key="i"
                        @click="emit('change', i + 1)"
                    >
                        <div
                            class="rounded-full flex justify-center items-center border-2 border-red-500 transition-all"
                            :class="
                                i + 1 < phaseIndex
                                    ? 'bg-red-500 w-4 h-4 md:w-8 md:h-8  text-white'
                                    : i + 1 > phaseIndex
                                    ? 'bg-white w-4 h-4 md:w-8 md:h-8 '
                                    : 'w-8 h-8 md:w-12 md:h-12 label-xl bg-red-500 text-white'
                            "
                        >
                            <p
                                :class="
                                    i + 1 !== phaseIndex
                                        ? 'hidden md:block'
                                        : ''
                                "
                            >
                                {{ i + 1 }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-5 container-box">
                <div
                    class="flex items-center flex-col text-center cursor-pointer"
                    v-for="(phaseText, i) in phases"
                    :key="i"
                    @click="emit('change', i + 1)"
                >
                    <p
                        v-if="showTitle"
                        class="transition-all"
                        :class="[
                            i + 1 == phaseIndex
                                ? 'label-xl mt-6 md:mt-8'
                                : 'label-sm mt-6',
                            i + 1 !== phaseIndex ? 'hidden md:block' : '',
                        ]"
                    >
                        {{ phaseText }}
                    </p>
                    <p v-if="showDescription" class="w-3/4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aliquam illo maxime fugiat corrupti adipisci.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { toRefs, isRef } from '@vue/reactivity'

const props = defineProps({
    phaseIndex: {
        type: Number,
    },
    showTitle: {
        type: Boolean,
        default: true,
    },
    showDescription: {
        type: Boolean,
        default: false,
    },
})

const { phaseIndex, showTitle, showDescription } = toRefs(props)

const phases = [
    'Initiieren',
    'Produzieren',
    'Platzieren',
    'Verbreiten',
    'Beeinflussung',
]

const emit = defineEmits(['change'])
</script>
