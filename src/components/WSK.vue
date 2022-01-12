<template>
    <div>
        <div class="relative">
            <div class="w-full h-0.5 absolute bg-red-500 z-0 flex items-center">
                <div
                    class="grid grid-cols-5 container-box z-10 relative items-center"
                >
                    <div
                        class="flex items-center flex-col cursor-pointer relative"
                        v-for="(phaseText, i) in phases"
                        :key="i"
                        @click="emit('change', i + 1)"
                    >
                        <div
                            class="rounded-full flex justify-center items-center border-2 border-red-500 transition-all"
                            :class="
                                i + 1 < phaseIndex
                                    ? 'bg-red-500 w-4 h-4 md:w-8 md:h-8 text-white label-sm'
                                    : i + 1 > phaseIndex
                                    ? 'bg-white w-4 h-4 md:w-8 md:h-8 label-sm'
                                    : 'w-8 h-8 md:w-12 md:h-12  label-xl bg-red-500 text-white'
                            "
                        >
                            <span
                                :class="
                                    i + 1 !== phaseIndex
                                        ? 'hidden md:block'
                                        : ''
                                "
                            >
                                {{ i + 1 }}
                            </span>
                        </div>
                        <div
                            v-if="i + 1 !== phases.length"
                            class="arrow-right absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
                        ></div>
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

<style scoped>
.arrow-right {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 12px solid rgba(252, 95, 87, var(--tw-border-opacity));
}
</style>
